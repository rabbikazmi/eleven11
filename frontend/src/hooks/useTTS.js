import { useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTTS = () => {
  const { t, i18n } = useTranslation();
  const synthRef = useRef(null);
  const utteranceRef = useRef(null);
  const speechQueueRef = useRef([]);
  const isSpeakingRef = useRef(false);

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Get appropriate voice for current language
  const getVoiceForLanguage = useCallback((lang) => {
    if (!synthRef.current) return null;

    const voices = synthRef.current.getVoices();
    
    // Language to voice mapping
    const langMap = {
      'en': ['en-US', 'en-GB', 'en'],
      'hi': ['hi-IN', 'hi'],
      'es': ['es-ES', 'es-MX', 'es'],
      'fr': ['fr-FR', 'fr-CA', 'fr'],
      'zh': ['zh-CN', 'zh-TW', 'zh'],
      'ar': ['ar-SA', 'ar-AE', 'ar'],
      'ru': ['ru-RU', 'ru'],
      'de': ['de-DE', 'de-AT', 'de']
    };

    const preferredLangs = langMap[lang] || ['en-US', 'en'];
    
    // Try to find a voice for the preferred languages
    for (const prefLang of preferredLangs) {
      const voice = voices.find(voice => 
        voice.lang.toLowerCase().startsWith(prefLang.toLowerCase())
      );
      if (voice) return voice;
    }

    // Fallback to first available voice
    return voices[0] || null;
  }, []);

  // Process speech queue
  const processQueue = useCallback(() => {
    if (isSpeakingRef.current || speechQueueRef.current.length === 0) {
      return;
    }

    const { text, options } = speechQueueRef.current.shift();
    isSpeakingRef.current = true;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice based on current language
    const voice = getVoiceForLanguage(i18n.language);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = i18n.language === 'zh' ? 'zh-CN' : i18n.language;
    }

    // Set speech properties
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 0.8;

    // Add event handlers
    utterance.onstart = () => {
      console.log('Speech started:', text);
    };

    utterance.onend = () => {
      console.log('Speech ended');
      isSpeakingRef.current = false;
      if (options.onEnd) options.onEnd();
      
      // Process next item in queue
      setTimeout(() => {
        processQueue();
      }, 100); // Small delay between speeches for natural flow
    };

    utterance.onerror = (event) => {
      console.error('Speech error:', event.error);
      isSpeakingRef.current = false;
      if (options.onError) options.onError(event);
      
      // Continue with next item even if there was an error
      setTimeout(() => {
        processQueue();
      }, 100);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [i18n.language, getVoiceForLanguage]);

  // Speak function with queue support
  const speak = useCallback((text, options = {}) => {
    if (!synthRef.current || !text) return;

    // Add to queue instead of speaking immediately
    speechQueueRef.current.push({ text, options });
    
    // Start processing if not already speaking
    processQueue();
  }, [processQueue]);

  // Stop current speech and clear queue
  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    // Clear the queue and reset speaking state
    speechQueueRef.current = [];
    isSpeakingRef.current = false;
  }, []);

  // Check if TTS is supported
  const isSupported = useCallback(() => {
    return 'speechSynthesis' in window;
  }, []);

  // Get detection announcement text
  const getDetectionAnnouncement = useCallback((detectionResults) => {
    if (!detectionResults || !detectionResults.detections) {
      return t('tts.noObjectsDetected');
    }

    const detections = detectionResults.detections;
    
    if (detections.length === 0) {
      return t('tts.noObjectsDetected');
    }

    // Create announcements for detected objects
    const announcements = [];
    const objectCounts = {};
    
    detections.forEach((detection) => {
      const className = detection.class_name?.toLowerCase();
      const confidence = Math.round(detection.confidence * 100);

      // Count objects by type
      if (!objectCounts[className]) {
        objectCounts[className] = 0;
      }
      objectCounts[className]++;

      // Map class names to announcement keys
      let announcementKey = '';
      
      switch (className) {
        case 'fire extinguisher':
        case 'fire_extinguisher':
          announcementKey = 'tts.fireExtinguisherDetected';
          break;
        case 'oxygen tank':
        case 'oxygen_tank':
        case 'o2 tank':
        case 'oxygen cylinder':
          announcementKey = 'tts.oxygenTankDetected';
          break;
        case 'emergency kit':
        case 'emergency_kit':
        case 'toolkit':
        case 'emergency toolkit':
          announcementKey = 'tts.emergencyKitDetected';
          break;
        default:
          announcementKey = 'tts.objectDetected';
      }

      // Get translated announcement
      let announcement;
      try {
        announcement = t(announcementKey, { 
          object: className,
          confidence: confidence 
        });
      } catch (error) {
        // Fallback if translation fails
        announcement = `${className} detected with ${confidence}% confidence`;
      }

      // Fallback if translation key doesn't exist
      if (announcement === announcementKey) {
        announcement = `${className} detected with ${confidence}% confidence`;
      }

      announcements.push(announcement);
    });

    // Add summary if multiple objects
    if (detections.length > 1) {
      const summary = t('tts.multipleObjectsDetected', { count: detections.length });
      announcements.unshift(summary);
    }

    return announcements.join('. ');
  }, [t]);

  // Announce detection results
  const announceDetection = useCallback((detectionResults, options = {}) => {
    const announcement = getDetectionAnnouncement(detectionResults);
    speak(announcement, {
      ...options,
      rate: 0.85, // Slightly slower for clarity
      pitch: 1.1  // Slightly higher pitch for alerts
    });
  }, [speak, getDetectionAnnouncement]);

  // Announce warning messages
  const announceWarning = useCallback((warningKey, options = {}) => {
    const warning = t(warningKey);
    speak(warning, {
      ...options,
      rate: 0.8,
      pitch: 1.2,
      volume: 0.9
    });
  }, [speak, t]);

  // Announce status updates
  const announceStatus = useCallback((statusKey, options = {}) => {
    const status = t(statusKey);
    speak(status, {
      ...options,
      rate: 1.0,
      pitch: 1.0
    });
  }, [speak, t]);

  // Check if speech is currently active
  const isSpeaking = useCallback(() => {
    return isSpeakingRef.current || speechQueueRef.current.length > 0;
  }, []);

  // Get queue length
  const getQueueLength = useCallback(() => {
    return speechQueueRef.current.length;
  }, []);

  return {
    speak,
    stop,
    isSupported,
    isSpeaking,
    getQueueLength,
    announceDetection,
    announceWarning,
    announceStatus,
    getDetectionAnnouncement
  };
};

export default useTTS;
