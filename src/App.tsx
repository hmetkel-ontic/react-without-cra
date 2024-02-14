import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import ViewListIcon from "@mui/icons-material/ViewList";
import TableChartIcon from "@mui/icons-material/TableChart";

import { AudioPlayer, AudioList, PaginatedAudioList } from "./components";
import { Typography } from "@mui/material";

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
  const [view, setView] = React.useState<string>("list-view");
  const [currentAudioIndex, setCurrentAudioIndex] = React.useState<number>(2); // TODO: to update this to -1 later
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const controlPlayPauseRef = React.useRef<{ toggle: () => void }>({
    toggle: () => {},
  });

  function handleAudioChange(index: number) {
    setCurrentAudioIndex(index);
    controlPlayPauseRef.current?.toggle();
  }

  function handleViewChange(
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ): void {
    if (newView) {
      setView(newView);
    }
  }

  return (
    <>
      <CssBaseline enableColorScheme />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Audio Player
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={view}
              onChange={handleViewChange}
            >
              <ToggleButton value="list-view">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="paginated-view">
                <TableChartIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>

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

      {view === "list-view" ? (
        <AudioList
          audios={audios}
          currentAudioIndex={currentAudioIndex}
          isPlaying={isPlaying}
          handleAudioChange={handleAudioChange}
        />
      ) : (
        <PaginatedAudioList
          audios={audios}
          currentAudioIndex={currentAudioIndex}
          setCurrentAudioIndex={setCurrentAudioIndex}
          isPlaying={isPlaying}
          controlPlayPauseRef={controlPlayPauseRef}
        />
      )}
    </>
  );
};

export default App;
