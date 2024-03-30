import React, { useRef, useEffect } from 'react';

interface VideoComponentProps {
  roomName: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ roomName }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Access the user's webcam and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch(console.error);

    // WebRTC and WebSocket logic here...

    // Cleanup on unmount
    return () => {
      wsRef.current?.close();
      // Additional cleanup...
    };
  }, [roomName]);

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline></video>
      <video ref={remoteVideoRef} autoPlay playsInline></video>
    </div>
  );
};

export default VideoComponent;
