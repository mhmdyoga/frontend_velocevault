"use client";
import React from 'react';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YoutubeVideo = () => {
  return (
    <>
      <ReactPlayer
      width="100%"
      height="300px"
      controls
      loop
      muted
      playing
      url="https://youtu.be/DZAdVY9kKbc?si=7u4mCw4ddBf77sWL"
      />
    </>
  )
}

export default YoutubeVideo