// SyncedVideos.tsx
import React, { useRef } from "react";

interface SyncedVideosProps {
  video1: string;
  video2: string;
}

const SyncedVideos: React.FC<SyncedVideosProps> = ({ video1, video2 }) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const playVideos = () => {
    videoRef1.current?.play();
    videoRef2.current?.play();
  };

  const pauseVideos = () => {
    videoRef1.current?.pause();
    videoRef2.current?.pause();
  };

  const resetVideos = () => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.currentTime = 0;
      videoRef2.current.currentTime = 0;
    }
  };

  const handleTimeUpdateVideo1 = () => {
    if (videoRef1.current && videoRef2.current) {
      if (
        Math.abs(
          videoRef1.current.currentTime - videoRef2.current.currentTime
        ) > 0.1
      ) {
        videoRef2.current.currentTime = videoRef1.current.currentTime;
      }
    }
  };

  const handleTimeUpdateVideo2 = () => {
    if (videoRef1.current && videoRef2.current) {
      if (
        Math.abs(
          videoRef2.current.currentTime - videoRef1.current.currentTime
        ) > 0.1
      ) {
        videoRef1.current.currentTime = videoRef2.current.currentTime;
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <video
          ref={videoRef1}
          src={video1}
          controls
          className="w-full"
          onPlay={playVideos}
          onPause={pauseVideos}
          onTimeUpdate={handleTimeUpdateVideo1}
        />
        <video
          ref={videoRef2}
          src={video2}
          controls
          className="w-full md:w-1/2" // Make the second video smaller on desktop
          onPlay={playVideos}
          onPause={pauseVideos}
          onTimeUpdate={handleTimeUpdateVideo2}
        />
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={playVideos}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Play
        </button>
        <button
          onClick={pauseVideos}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pause
        </button>
        <button
          onClick={resetVideos}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SyncedVideos;
