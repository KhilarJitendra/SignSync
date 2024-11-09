import React, { useRef } from "react";

interface SyncedVideosProps {
  video1: string; // Path to the first video (e.g., 'human.mp4')
  video2: string; // Path to the second video (e.g., 'final_video.mp4')
}

const SyncedVideos: React.FC<SyncedVideosProps> = ({ video1, video2 }) => {
  // References to both video elements
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  // Function to play both videos in sync
  const playVideos = () => {
    videoRef1.current?.play();
    videoRef2.current?.play();
  };

  // Function to pause both videos in sync
  const pauseVideos = () => {
    videoRef1.current?.pause();
    videoRef2.current?.pause();
  };

  // Function to reset both videos to start
  const resetVideos = () => {
    if (videoRef1.current && videoRef2.current) {
      videoRef1.current.currentTime = 0;
      videoRef2.current.currentTime = 0;
    }
  };

  // Sync video2's time with video1 when video1 is updated
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

  // Sync video1's time with video2 when video2 is updated
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
      <div className="flex gap-4">
        <video
          ref={videoRef1}
          src={video1}
          style={{ width: "600px", height: "100%" }}
          controls
          className="w-1/2"
          onPlay={playVideos}
          onPause={pauseVideos}
          onTimeUpdate={handleTimeUpdateVideo1}
        />
        <video
          ref={videoRef2}
          src={video2}
          controls
          className="w-1/2"
          style={{ width: "300px", height: "300px" }}
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
