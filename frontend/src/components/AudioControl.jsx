import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, VolumeX, Radio } from 'lucide-react';
import useTTS from '../hooks/useTTS';

const AudioControl = ({ onToggle, className = '' }) => {
  const { t } = useTranslation();
  const { isSpeaking, getQueueLength } = useTTS();
  const [isEnabled, setIsEnabled] = useState(() => {
    // Get saved preference from localStorage
    const saved = localStorage.getItem('tts-enabled');
    return saved !== null ? JSON.parse(saved) : true; // Default to enabled
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('tts-enabled', JSON.stringify(isEnabled));
    if (onToggle) {
      onToggle(isEnabled);
    }
  }, [isEnabled, onToggle]);

  const toggleAudio = () => {
    setIsEnabled(!isEnabled);
  };

  const speaking = isSpeaking();
  const queueLength = getQueueLength();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleAudio}
        className={`inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-600 ${className}`}
        aria-label={isEnabled ? t('tts.audioEnabled') : t('tts.audioDisabled')}
        title={isEnabled ? t('tts.audioEnabled') : t('tts.audioDisabled')}
      >
        {isEnabled ? (
          <Volume2 className="h-4 w-4 text-green-400" />
        ) : (
          <VolumeX className="h-4 w-4 text-gray-400" />
        )}
        <span className="ml-2 text-sm font-medium">
          {isEnabled ? 'Audio' : 'Muted'}
        </span>
      </button>
      
      {/* Speech Status Indicator */}
      {isEnabled && speaking && (
        <div className="inline-flex items-center px-2 py-1 bg-blue-800/50 border border-blue-600 rounded font-mono text-xs">
          <Radio className="h-3 w-3 text-blue-400 animate-pulse mr-1" />
          <span className="text-blue-300">
            {queueLength > 0 ? `Speaking (${queueLength + 1} queued)` : 'Speaking...'}
          </span>
        </div>
      )}
    </div>
  );
};

export default AudioControl;
