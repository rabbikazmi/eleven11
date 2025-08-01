// This component has been removed - no longer needed since we have real detection statistics

const DetectionStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Stats Cards */}
      <Card className="bg-black/20 backdrop-blur-sm border-gray-800 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">Total Detections</CardTitle>
          <Eye className="h-4 w-4 text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{mockStats.totalDetections.toLocaleString()}</div>
          <p className="text-xs text-gray-400">+12% from last hour</p>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border-gray-800 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">Avg Confidence</CardTitle>
          <Zap className="h-4 w-4 text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{mockStats.avgConfidence}%</div>
          <p className="text-xs text-gray-400">High accuracy maintained</p>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border-gray-800 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">System Uptime</CardTitle>
          <Clock className="h-4 w-4 text-purple-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{mockStats.uptime}</div>
          <p className="text-xs text-gray-400">Excellent stability</p>
        </CardContent>
      </Card>

      <Card className="bg-black/20 backdrop-blur-sm border-gray-800 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">Processing Speed</CardTitle>
          <Activity className="h-4 w-4 text-orange-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{mockStats.fps} FPS</div>
          <p className="text-xs text-gray-400">Real-time processing</p>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="md:col-span-2 lg:col-span-4 bg-black/20 backdrop-blur-sm border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-400" />
            Recent Detections
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRecentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-medium">{activity.object}</span>
                  <Badge variant="outline" className="text-green-400 border-green-400/30">
                    {activity.confidence}%
                  </Badge>
                </div>
                <span className="text-gray-400 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetectionStats;