import React from "react";

import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { Container, Box } from "@mui/material";

import VirtualisedList from "./virtualisedList";

interface AudioListItemProp {
  src: string;
  title: string;
}

interface AudioListProps {
  audios: AudioListItemProp[];
  currentAudioIndex: number;
  isPlaying: boolean;
  setCurrentAudioIndex: React.Dispatch<React.SetStateAction<number>>;
  controlPlayPauseRef: React.MutableRefObject<{
    toggle: () => void;
  }>;
}

export default function AudioList({
  audios,
  currentAudioIndex,
  isPlaying,
  setCurrentAudioIndex,
  controlPlayPauseRef,
}: AudioListProps) {
  return (
    <Container maxWidth={"md"}>
      <VirtualisedList<AudioListItemProp>
        listContainerWidth={500}
        listItemHeight={60}
        items={audios}
        renderItem={(audio: AudioListItemProp, index: number | undefined) =>
          index !== undefined ? (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                backgroundColor: index === currentAudioIndex ? "#888" : "",
                borderRadius: 1,
                py: 1,
                px: 2,
                justifyContent: "space-between",
              }}
              onClick={() => setCurrentAudioIndex(index)}
            >
              {audio.title}
              {index === currentAudioIndex && isPlaying ? (
                <PauseCircle
                  color="primary"
                  aria-label="Pause current audio"
                  onClick={() => controlPlayPauseRef.current?.toggle()}
                />
              ) : (
                <PlayCircle
                  color="primary"
                  aria-label="Play current audio"
                  onClick={() => controlPlayPauseRef.current?.toggle()}
                />
              )}
            </Box>
          ) : null
        }
      />
    </Container>
  );
}
