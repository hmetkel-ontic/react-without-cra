import React, { useState, useEffect } from "react";

import { Stack, CssBaseline, Paper } from "@mui/material";

import AudioPlayer from "./Components/AudioPlayer";

import "./App.css";

const PATH_TO_AUDIO_DIR = "/assets/audio/";

const audios = ["test1.mp3", "test2.mp3", "test3.mp3"];

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
  const [currentAudio, setCurrentAudio] = useState<{
    [key: string]: string;
  } | null>(null);

  useEffect(() => {
    if (currentAudioIndex == -1) return;

    setCurrentAudio({
      title: audios[currentAudioIndex],
      src: getPathToAudio(audios[currentAudioIndex]),
    });
    console.log(
      "currentAudio->",
      currentAudio,
      "currentAudioIndex->",
      currentAudioIndex
    );
  }, [currentAudioIndex]);

  function getPathToAudio(audio: string): string {
    return PATH_TO_AUDIO_DIR + audio;
  }

  return (
    <>
      <CssBaseline enableColorScheme />
      <AudioPlayer
        currentAudio={currentAudio}
        currentAudioIndex={currentAudioIndex}
        onNext={() => setCurrentAudioIndex((index) => index + 1)}
        onPrev={() => setCurrentAudioIndex((index) => index - 1)}
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
                backgroundColor: index === currentAudioIndex ? "red" : "",
              }}
            >
              {audio}
            </Item>
          );
        })}
      </Stack>
    </>
  );
};

export default App;
