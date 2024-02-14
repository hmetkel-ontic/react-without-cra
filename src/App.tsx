import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { AudioPlayer, AudioList, PaginatedAudioList } from "./components";
import { Typography } from "@mui/material";

import "./App.css";

const PATH_TO_AUDIO_DIR = "/assets/audio/";
function getPathToAudio(audio: string): string {
  return PATH_TO_AUDIO_DIR + audio;
}

import { items } from "./constants";

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

const App = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = React.useState<number>(2); // TODO: to update this to -1 later
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const controlPlayPauseRef = React.useRef<{ toggle: () => void }>({
    toggle: () => {},
  });

  return (
    <>
      <CssBaseline enableColorScheme />

      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Audio Player
      </Typography>

      <AudioPlayer
        audios={audios}
        currentAudioIndex={currentAudioIndex}
        onNext={() => setCurrentAudioIndex((index) => index + 1)}
        onPrev={() => setCurrentAudioIndex((index) => index - 1)}
        totalAudiosCount={audios.length}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        controlPlayPauseRef={controlPlayPauseRef}
      />

      <PaginatedAudioList data={audios} />

      {/* <AudioList
        audios={audios}
        currentAudioIndex={currentAudioIndex}
        setCurrentAudioIndex={setCurrentAudioIndex}
        isPlaying={isPlaying}
        controlPlayPauseRef={controlPlayPauseRef}
      /> */}
    </>
  );
};

export default App;
