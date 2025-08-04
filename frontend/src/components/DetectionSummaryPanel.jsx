import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Activity,
  Clock,
  Target
} from 'lucide-react';

const DetectionSummaryPanel = ({ detectionResults, systemStatus }) => {
  const { t } = useTranslation();

  // Define safety equipment that should be present
  const expectedEquipment = [
    { id: 'fire_extinguisher', name: t('summary.equipment.fireExtinguisher'), critical: true },
    { id: 'oxygen_tank', name: t('summary.equipment.oxygenTank'), critical: true },
    { id: 'toolbox', name: t('summary.equipment.toolbox'), critical: false }
  ];

  // Check what's detected vs what's expected
  const getDetectionSummary = () => {
    if (!detectionResults?.detections) {
      return {
        present: [],
        missing: expectedEquipment,
        additional: [],
        criticalMissing: expectedEquipment.filter(eq => eq.critical)
      };
    }

    const detectedClasses = detectionResults.detections.map(d => d.class_name.toLowerCase());
    const present = expectedEquipment.filter(eq => 
      detectedClasses.some(detected => detected.includes(eq.id.replace('_', '')))
    );
    const missing = expectedEquipment.filter(eq => 
      !detectedClasses.some(detected => detected.includes(eq.id.replace('_', '')))
    );
    const additional = detectionResults.detections.filter(d => 
      !expectedEquipment.some(eq => d.class_name.toLowerCase().includes(eq.id.replace('_', '')))
    );
    const criticalMissing = missing.filter(eq => eq.critical);

    return { present, missing, additional, criticalMissing };
  };

  const summary = getDetectionSummary();
  const totalDetections = detectionResults?.detections?.length || 0;
  const averageConfidence = totalDetections > 0 ? 
    Math.round(detectionResults.detections.reduce((acc, det) => acc + det.confidence, 0) / totalDetections * 100) : 0;

  // Determine overall safety status
  const getSafetyStatus = () => {
    if (summary.criticalMissing.length > 0) {
      return { status: 'critical', color: 'text-red-400', bgColor: 'bg-red-900/20', borderColor: 'border-red-500' };
    } else if (summary.missing.length > 0) {
      return { status: 'warning', color: 'text-yellow-400', bgColor: 'bg-yellow-900/20', borderColor: 'border-yellow-500' };
    } else if (summary.present.length > 0) {
      return { status: 'safe', color: 'text-green-400', bgColor: 'bg-green-900/20', borderColor: 'border-green-500' };
    } else {
      return { status: 'unknown', color: 'text-gray-400', bgColor: 'bg-gray-900/20', borderColor: 'border-gray-500' };
    }
  };

  const safetyStatus = getSafetyStatus();

  return (
    <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center font-mono">
          <Activity className="w-6 h-6 mr-3 text-gray-400" />
          DETECTION SUMMARY
        </h2>
        <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${safetyStatus.bgColor} ${safetyStatus.color} ${safetyStatus.borderColor} border`}>
          {t(`summary.status.${safetyStatus.status}`)}
        </div>
      </div>

      {/* Safety Equipment Status */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-white font-mono flex items-center">
          <Shield className="w-5 h-5 mr-2 text-gray-400" />
          {t('summary.equipment.title')}
        </h3>

        {/* Present Equipment */}
        {summary.present.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-green-400 font-mono">{t('summary.equipment.present')}</h4>
            {summary.present.map((equipment, index) => (
              <div key={index} className="flex items-center justify-between bg-green-900/20 border border-green-500/30 p-3 rounded">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-100 font-mono text-sm">{equipment.name}</span>
                </div>
                <span className="text-green-400 text-xs font-mono">✓ {t('summary.equipment.detected')}</span>
              </div>
            ))}
          </div>
        )}

        {/* Missing Equipment */}
        {summary.missing.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-red-400 font-mono">{t('summary.equipment.missing')}</h4>
            {summary.missing.map((equipment, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded ${
                equipment.critical ? 'bg-red-900/20 border border-red-500/30' : 'bg-yellow-900/20 border border-yellow-500/30'
              }`}>
                <div className="flex items-center">
                  <XCircle className={`w-4 h-4 mr-2 ${equipment.critical ? 'text-red-400' : 'text-yellow-400'}`} />
                  <span className={`font-mono text-sm ${equipment.critical ? 'text-red-100' : 'text-yellow-100'}`}>{equipment.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {equipment.critical && (
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-xs font-mono ${equipment.critical ? 'text-red-400' : 'text-yellow-400'}`}>
                    {equipment.critical ? t('summary.equipment.critical') : t('summary.equipment.optional')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Objects */}
        {summary.additional.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-blue-400 font-mono">{t('summary.equipment.additional')}</h4>
            {summary.additional.map((detection, index) => (
              <div key={index} className="flex items-center justify-between bg-blue-900/20 border border-blue-500/30 p-3 rounded">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-100 font-mono text-sm">{detection.class_name}</span>
                </div>
                <span className="text-blue-400 text-xs font-mono">{(detection.confidence * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* System Status */}
      <div className="pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-gray-300 text-sm font-mono">{t('summary.system.status')}</span>
          </div>
          <span className="text-white font-mono text-sm">{systemStatus}</span>
        </div>
      </div>

      {/* Recommendations */}
      {summary.criticalMissing.length > 0 && (
        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded">
          <h4 className="text-red-400 font-semibold text-sm font-mono mb-2 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            {t('summary.recommendations.title')}
          </h4>
          <p className="text-red-100 text-sm font-mono">
            {t('summary.recommendations.criticalMissing', { count: summary.criticalMissing.length })}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetectionSummaryPanel;
