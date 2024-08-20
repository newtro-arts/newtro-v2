import Image from "next/image";
import React, { useRef, useState } from "react";

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <div className="lg:mx-auto w-full flex justify-center relative">
      {!playing && (
        <Image
          src="/newtro-thumbnail.png"
          alt="Thumbnail"
          width={1600}
          height={400}
          onClick={handlePlay}
          className=" object-cover"
        />
      )}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="relative shadow-lg max-w-3xl w-full">
            <video ref={videoRef} controls autoPlay className="w-full h-auto">
              <source src="https://pub-45a4182a1c2b41f3a18151a5e2a4ce29.r2.dev/community%2FNEWTRO%20RECAP%20c%20musica.mp4 " />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-secondary-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {!playing && (
        <button
          onClick={handlePlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "black",
            outline: "none",
          }}
        >
          <Image
            src="/play-button.svg"
            height={125}
            width={125}
            alt="Play"
            className="hover:fill-white active:fill-white"
          />
        </button>
      )}
    </div>
  );
};

export default VideoComponent;
