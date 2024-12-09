"use client";

import { useRef, useState, useEffect, use } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Generate stable waveform heights on client-side only
    const heights = Array.from({ length: width > 500 ? 100 : 40 }, () => Math.floor(Math.random() * 85) + 15);
    setWaveformHeights(heights);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        const progress = ((audioRef.current?.currentTime || 0) / (audioRef.current?.duration || 1)) * 100;
        setProgress(progress);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = x / width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-xl shadow-2xl">
        <audio
          ref={audioRef}
          src="https://storage.googleapis.com/moises-cms-music-ai/arise_moises_d5eb0e7c9f/arise_moises_d5eb0e7c9f.wav"
          preload="metadata"
        />

        <div className="relative flex items-center gap-6">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform z-20">
            {isPlaying ? <FaPause className="w-6 h-6 text-gray-900" /> : <FaPlay className="w-6 h-6 text-gray-900" />}
          </button>

          <div className="relative w-full h-14 mr-2">
            <div className="absolute inset-0 flex items-center">
              {waveformHeights.map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 mx-[1px] rounded-full transition-all duration-50 ${
                    i <= (progress / 100) * waveformHeights.length ? "bg-white" : "bg-gray-600 group-hover:bg-gray-500"
                  }`}
                  style={{
                    height: `${height}%`,
                  }}
                />
              ))}
            </div>

            {/* Click handler overlay */}
            <div className="absolute inset-0 cursor-pointer" onClick={handleProgressClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
