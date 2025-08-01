# Eleven11 Safety Detection System

AI-powered safety equipment detection system using YOLOv8 and React.

## Features
- Real-time object detection for safety equipment
- Web-based interface with camera integration
- Support for ToolBox, OxygenTank, and FireExtinguisher detection
- Clean, responsive UI with detection visualization

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Place your YOLO model weights in `model weights/best.pt`

4. Start the backend server:
   ```bash
   python main.py
   ```
   Backend will be available at http://localhost:5000

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Frontend will be available at http://localhost:3000

## Usage
1. Start both backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Upload an image or use camera to capture
4. Click "RUN DETECTION" to analyze safety equipment
5. View results with bounding boxes and confidence scores

## Tech Stack
- **Backend**: Flask, YOLOv8, OpenCV, PIL
- **Frontend**: React, Tailwind CSS, Lucide Icons
- **AI Model**: YOLOv8 custom trained on safety equipment

## API Endpoints
- `GET /` - Health check
- `POST /detect` - Image detection endpoint