from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from ultralytics import YOLO
import numpy as np
import cv2
from PIL import Image
import io
import os
import base64

app = Flask(__name__)
CORS(app)

# Load YOLOv8 model
model_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "model weights", "best.pt")
model = YOLO(model_path)  # Load model from the model weights folder

@app.route('/')
def home():
    return 'Eleven11 Crew Safety Detection API'

@app.route('/detect', methods=['POST'])
def detect_gear():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    image_bytes = image_file.read()
    image_np = np.array(Image.open(io.BytesIO(image_bytes)).convert('RGB'))

    # Run detection
    results = model(image_np)[0]

    # Extract bounding boxes and labels
    detections = []
    annotated_img = image_np.copy()

    for box in results.boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        cls_id = int(box.cls[0])
        label = model.names[cls_id]
        conf = float(box.conf[0])

        # Convert x1,y1,x2,y2 to x,y,width,height format for frontend
        width = x2 - x1
        height = y2 - y1

        detections.append({
            "class_name": label,
            "confidence": conf,
            "bbox": [x1, y1, width, height]
        })

        # Draw boxes on the image
        color = (0, 255, 0)
        cv2.rectangle(annotated_img, (x1, y1), (x2, y2), color, 2)
        cv2.putText(annotated_img, f'{label} {conf:.2f}', (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

    # Save annotated image to buffer
    _, img_encoded = cv2.imencode('.jpg', annotated_img)
    img_bytes = img_encoded.tobytes()

    return {
        "detections": detections,
        "annotated_image": "data:image/jpeg;base64," + 
            base64.b64encode(img_bytes).decode('utf-8')
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
