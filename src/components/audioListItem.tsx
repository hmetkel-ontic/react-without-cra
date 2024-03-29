import React from "react";

import Box from "@mui/material/Box";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function AudioLIstItem(props: AudioListItemProps) {
  const { index, currentAudioIndex, audio, isPlaying } = props;

  return (
    <Box
      key={index}
      sx={{
        width: "100%",
        display: "flex",
        backgroundColor: audio.id - 1 === currentAudioIndex ? "#888" : "",
        borderRadius: 1,
        py: 1,
        px: 2,
        justifyContent: "space-between",
      }}
    >
      {audio.title}
      {audio.id - 1 === currentAudioIndex && isPlaying ? (
        <PauseCircleIcon
          fontSize="large"
          color="primary"
          aria-label="Pause current audio"
        />
      ) : (
        <PlayCircleIcon color="primary" aria-label="Play current audio" />
      )}
    </Box>
  );
}
