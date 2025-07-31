<div align="center">
<h1>Eleven11 – Spot. Detect. Protect.</h1>
<p>
<img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
<img src="https://img.shields.io/badge/Python-3.10+-blue?style=flat&logo=python" alt="Python 3.10+">
<img src="https://img.shields.io/badge/Backend-Flask-black?style=flat&logo=flask" alt="Backend: Flask">
<img src="https://img.shields.io/badge/Frontend-React-blue?style=flat&logo=react" alt="Frontend: React">
<img src="https://img.shields.io/badge/Model-YOLOv8-blueviolet?style=flat" alt="Model: YOLOv8">
<img src="https://img.shields.io/badge/Styling-TailwindCSS-cyan?style=flat&logo=tailwindcss" alt="Styling: TailwindCSS">
</p>
</div>

## Overview
Eleven11 Crew is a web-based application designed to identify critical space safety gear in visual data from space stations. It utilizes a custom-trained YOLOv8 model to detect essential equipment such as O_2 cylinders, fire extinguishers, and toolkits. The application also includes a 3D exploration section where users can interact with astronaut and space station models. 🚀

## Features
- Image Analysis: Upload or capture an image for gear detection.

- Real-time Detection: Identifies objects with bounding boxes and confidence scores.

- Recognized Objects: Detects O_2 cylinders, fire extinguishers, and toolkits.

- Interactive 3D Models: Explore astronaut and space station models for visual context.

- Modern UI: Responsive frontend built with React.

- Robust Backend: REST API powered by Flask and YOLOv8.

## Tech Stack
### Frontend
1. React.js: For building the user interface.

2. TailwindCSS: For utility-first styling.

3. model-viewer / Three.js: For interactive 3D models.

4. Canvas API: For overlaying detection bounding boxes.

### Backend
1. Python 3.10+: Core programming language.

2. Flask: Web framework for the REST API.

3. YOLOv8 (Ultralytics): For the object detection model.

4. OpenCV: For rendering annotated images.

## Project Structure
```
eleven11-crew/
├── backend/
│   ├── app.py
│   ├── best.pt
│   └── requirements.txt
├── frontend/
│   ├── src/
│   └── public/
└── README.md
```

## API Endpoint
POST /detect

Uploads an image file and returns detection results along with a base64 encoded image with annotations.

## Getting Started
Backend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/eleven11-crew.git

# Navigate to the backend directory
cd eleven11-crew/backend

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```
Frontend Setup

```bash
# Navigate to the frontend directory
cd eleven11-crew/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
