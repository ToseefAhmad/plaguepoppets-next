"use client"
import React, { useEffect, useRef } from 'react';

interface VideoAutoPlayProps {
  src: string;
  threshold : number;
}

const VideoAutoPlay: React.FC<VideoAutoPlayProps> = ({ src, threshold }) =>  {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // The callback will return an array of entries, even if you are only observing a single element
        entries.forEach(entry => {
          // If the element is in viewport
          if (entry.isIntersecting) {
            // Play the video
            videoRef?.current.play();
          } else {
            // Pause the video
            videoRef.current.pause();
          }
        });
      },
      // Options: this will trigger when 50% of the element is visible
      { threshold: threshold }
    );

    observer.observe(videoRef.current);

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return <video ref={videoRef} src={src} muted loop />;
};

export default VideoAutoPlay;