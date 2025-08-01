// This component has been removed - no longer needed since we have real detection functionality

const CameraFeed = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [detections, setDetections] = useState([]);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isStreaming) {
      // Simulate real-time detections
      const interval = setInterval(() => {
        setDetections(mockDetections.map(det => ({
          ...det,
          bbox: {
            ...det.bbox,
            x: det.bbox.x + (Math.random() - 0.5) * 10,
            y: det.bbox.y + (Math.random() - 0.5) * 10
          },
          confidence: det.confidence + (Math.random() - 0.5) * 2
        })));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStreaming]);

  const toggleStream = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      setDetections(mockDetections);
    } else {
      setDetections([]);
    }
  };

  return (
    <Card className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-gray-800">
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative">
        {/* Mock camera feed background */}
        <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
          {isStreaming ? (
            <div className="relative w-full h-full">
              {/* Simulating video feed with animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse" />
              
              {/* Detection boxes */}
              {detections.map((detection) => (
                <div
                  key={detection.id}
                  className="absolute border-2 border-green-400 animate-pulse"
                  style={{
                    left: `${(detection.bbox.x / 640) * 100}%`,
                    top: `${(detection.bbox.y / 480) * 100}%`,
                    width: `${(detection.bbox.width / 640) * 100}%`,
                    height: `${(detection.bbox.height / 480) * 100}%`,
                  }}
                >
                  <Badge className="absolute -top-6 left-0 bg-green-500 text-black text-xs">
                    {detection.object} {detection.confidence.toFixed(1)}%
                  </Badge>
                </div>
              ))}
              
              {/* Scanning animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-ping" />
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <Video size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">Camera Feed Offline</p>
              <p className="text-sm">Click play to start detection</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={toggleStream}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            {isStreaming ? <Pause size={18} /> : <Play size={18} />}
            {isStreaming ? 'Stop' : 'Start'} Feed
          </button>
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
            isStreaming 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isStreaming ? 'bg-green-400 animate-ping' : 'bg-red-400'}`} />
            {isStreaming ? 'LIVE' : 'OFFLINE'}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CameraFeed;