import React, { useRef, useEffect } from 'react'
import axios from 'axios';
import  './service.css'
// We can also implement webcamera by using AllCameras.js or Camera.js


const Service = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const context = canvasElement.getContext('2d');
    let captureInterval;

    const captureFrame = () => {
      if (videoElement && canvasElement) {
        context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        const base64ImageData = canvasElement.toDataURL('image/jpeg');
        // console.log(base64ImageData); // Output the Base64 image data

        const sendDataToBackend = async (data) => {
          try {
            const response = await axios.post('http://127.0.0.1:8000/', data);
            console.log(response.data); // Response from Django backend
          } catch (error) {
            console.error('Error sending data to backend:', error);
          }
        };

        // Usage
        sendDataToBackend({ key: `${base64ImageData}` });
      }
    };

    const initializeWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;

        try {
          setTimeout(() => {
            videoElement.play();
          }, 100);
        } catch (error) {
          alert(error.toString);
          console.error('Error playing video:', error);
        }

        captureInterval = setInterval(captureFrame, 1000); // Capture frame every second
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };


    initializeWebcam();

    return () => {
      clearInterval(captureInterval);
      if (videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };

  }, [1000]);


  return (
    <div className='project__service'>

      {/* ---------------------------------     For acceessing webcamera and livecasting the footage    ----------------------------  */}
      <h1>Please Wait...... <br />I am loading your data...........</h1>
      <video ref={videoRef} style={{ width:640, height:480 }}></video>
      <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480}></canvas>

      {/* ---------------------------------          END        -----------------------------------------------  */}
      
    </div>
  )
}

export default Service
