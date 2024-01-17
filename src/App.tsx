import React, { useState, useRef } from "react";

import { Stack, CssBaseline, Paper } from "@mui/material";
import { PlayCircle, PauseCircle } from "@mui/icons-material";

import AudioPlayer from "./Components/AudioPlayer";

import "./App.css";

const PATH_TO_AUDIO_DIR = "/assets/audio/";
function getPathToAudio(audio: string): string {
  return PATH_TO_AUDIO_DIR + audio;
}

// audios from pixabay
const audios = [
  {
    src: getPathToAudio("the-day-of-a-test.mp3"),
    title: "the-day-of-a-test",
  },
  {
    src: getPathToAudio("printemps.mp3"),
    title: "printemps",
  },
  {
    src: getPathToAudio("pianesque.mp3"),
    title: "pianesque",
  },
];

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0); // remember to update this to -1 later
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function togglePlayPause() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying((state) => !state);
  }

  return (
    <>
      <CssBaseline enableColorScheme />
      <AudioPlayer
        audios={audios}
        currentAudioIndex={currentAudioIndex}
        onNext={() => setCurrentAudioIndex((index) => index + 1)}
        onPrev={() => setCurrentAudioIndex((index) => index - 1)}
        totalAudiosCount={audios.length}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        togglePlayPause={togglePlayPause}
      />

      <Stack
        sx={{
          width: "50%",
        }}
      >
        {audios.map((audio, index) => {
          return (
            <Item
              key={index}
              sx={{
                backgroundColor: index === currentAudioIndex ? "#888" : "",
              }}
              onClick={() => setCurrentAudioIndex(index)}
            >
              {audio.title}
              {index === currentAudioIndex && isPlaying ? (
                <PauseCircle
                  color="primary"
                  onClick={() => togglePlayPause()}
                />
              ) : (
                <PlayCircle color="primary" onClick={() => togglePlayPause()} />
              )}
            </Item>
          );
        })}
      </Stack>
    </>
  );
};

export default App;
