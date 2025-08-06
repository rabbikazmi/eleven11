# Eleven11 Crew Safety Detection - Integration Guide

## Project Structure
```
eleven11/
├── backend/
│   ├── main.py              # Flask API server
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Detection.jsx # Main detection component
│   │   └── ...
│   ├── package.json         # Node.js dependencies
│   ├── .env                 # Environment variables
│   └── .npmrc               # NPM configuration
├── model weights/
│   └── best.pt              # YOLO model file (87.6MB)
├── start_backend.bat        # Backend startup script
├── start_frontend.bat       # Frontend startup script
└── test_integration.py      # API integration test
```

## Quick Start

### Option 1: Use Batch Files (Recommended)
1. **Double-click `start_backend.bat`** - Starts Flask server on port 5000
2. **Double-click `start_frontend.bat`** - Starts React server on port 3000
3. **Open browser to http://localhost:3000**

##  Integration Status

### Backend (Port 5000) 
- Flask API running successfully
- YOLO model (`best.pt`) loaded correctly
- CORS enabled for frontend requests
- Endpoints: `/` (health) and `/detect` (main API)

### Frontend (Port 3000) 
- React development server running
- Camera integration with react-webcam
- File upload functionality
- API integration with backend
- Modern space-themed UI
- 
### Dependencies 
- **Backend**: Flask, CORS, Ultralytics YOLO, OpenCV, PIL, NumPy
- **Frontend**: React, Axios, React-webcam, Tailwind CSS, Radix UI
- **Compatibility**: Fixed ajv/ajv-keywords version conflicts

## API Integration

### Request Format
```javascript
POST /detect
Content-Type: multipart/form-data
Body: FormData with 'image' field
```

### Response Format
```json
{
  "detections": [
    {
      "class_name": "helmet",
      "confidence": 0.95,
      "bbox": [x, y, width, height]
    }
  ],
  "annotated_image": "data:image/jpeg;base64,..."
}
```

## Features Working 
-  Real-time camera capture
-  File upload (drag & drop)
-  Safety gear detection using your trained model
-  Bounding box visualization
-  Confidence scores display  
-  Results download (JSON)
-  Error handling
-  Loading states and animations
-  Space-themed UI with HUD elements

## Troubleshooting

### If Frontend Won't Start:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --force
npm start
```

### If Backend Has Import Errors:
```bash
cd backend
pip install -r requirements.txt
```

### Test Integration:
```bash
python test_integration.py
```

## Model Information
- **File**: `model weights/best.pt`
- **Size**: 87.6MB
- **Type**: YOLOv8 PyTorch model
- **Status**: Successfully loaded and integrated
