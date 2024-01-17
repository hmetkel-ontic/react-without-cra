import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import AudioPlayer from "./Components/AudioPlayer";
import AudioList from "./Components/AudioList";

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

const App = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = React.useState<number>(0); // remember to update this to -1 later
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const controlPlayPauseRef = React.useRef<{ toggle: () => void }>({
    toggle: () => {},
  });

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
        controlPlayPauseRef={controlPlayPauseRef}
      />

      <AudioList
        audios={audios}
        currentAudioIndex={currentAudioIndex}
        setCurrentAudioIndex={setCurrentAudioIndex}
        isPlaying={isPlaying}
        controlPlayPauseRef={controlPlayPauseRef}
      />

      {/* <Stack
        sx={{
          width: "50%",
        }}
      >
        {audios.map((audio, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                backgroundColor: index === currentAudioIndex ? "#888" : "",
                borderRadius: 1,
                py: 1, px:2,
                justifyContent:"space-between"
              }}
              onClick={() => setCurrentAudioIndex(index)}
            >
              {audio.title}
              {index === currentAudioIndex && isPlaying ? (
                <PauseCircle
                  color="primary"
                  onClick={() => controlPlayPauseRef.current?.toggle()}
                />
              ) : (
                <PlayCircle
                  color="primary"
                  onClick={() => controlPlayPauseRef.current?.toggle()}
                />
              )}
            </Box>
          );
        })}
      </Stack> */}
    </>
  );
};

export default App;
