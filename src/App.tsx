import React, { useState } from "react";

import { Stack, CssBaseline, Paper } from "@mui/material";

import AudioPlayer from "./Components/AudioPlayer";

import "./App.css";

const PATH_TO_AUDIO_DIR = "/assets/audio/";

const audios = [
  {
    src: PATH_TO_AUDIO_DIR + "the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
  },
  {
    src: PATH_TO_AUDIO_DIR + "printemps.mp3",
    title: "printemps",
  },
  {
    src: PATH_TO_AUDIO_DIR + "pianesque.mp3",
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
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(-1); // remember to update this to -1 later
  const currentAudio = audios[currentAudioIndex];

  function getPathToAudio(audio: string): string {
    return PATH_TO_AUDIO_DIR + audio;
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
              {audio.title}
            </Item>
          );
        })}
      </Stack>
    </>
  );
};

export default App;
