import React from "react";

import { Typography } from "@mui/material";

type AudioPlayerProps = {
  currentSong?: string;
  songCount: number;
  songIndex: number;
  onNext: () => void;
  onPrev: () => void;
};
// keep this audio player accessible also

const AudioPlayer = ({
  currentSong,
  songCount,
  songIndex,
  onNext,
  onPrev,
}: AudioPlayerProps) => {
  return (
    <>
      <Typography variant="h3" component="h1" color="secondary" align="center">
        Audio Player
      </Typography>
      {currentSong && (
        <audio preload="metadata" controls src={currentSong}></audio>
      )}
    </>
  );
};

export default AudioPlayer;
