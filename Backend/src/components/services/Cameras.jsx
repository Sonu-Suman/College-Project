// src/App.js

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [cameras, setCameras] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    async function getCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setCameras(videoDevices);
      } catch (error) {
        console.error('Error accessing cameras:', error);
      }
    }

    getCameras();

    // Cleanup function to stop all video tracks and clear interval
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startCamera = async (deviceId) => {
    if (videoRef.current) {
      try {
        // Stop the current stream if there's any
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: deviceId } }
        });

        videoRef.current.srcObject = stream;
        streamRef.current = stream; // Store the stream in a ref to manage it

        // Clear any existing interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        // Set interval to capture a photo every second
        intervalRef.current = setInterval(capturePhoto, 100);
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }
  };

  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data from the canvas
      const imageData = canvas.toDataURL('image/png');
      console.log('Captured photo:', imageData);
      // Here you can send the imageData to your server or process it further
    }
  };

  return (
    <div className="App">
      <h1>Available Cameras</h1>
      <ul>
        {cameras.map((camera, index) => (
          <li key={camera.deviceId}>
            <button onClick={() => startCamera(camera.deviceId)}>
              {camera.label || `Camera ${index + 1}`}
            </button>
          </li>
        ))}
      </ul>
      <video ref={videoRef} autoPlay style={{ width:640, height:480 }}></video>
      <canvas ref={canvasRef} style={{ display: 'flex' }}></canvas>
    </div>
  );
}

export default App;
