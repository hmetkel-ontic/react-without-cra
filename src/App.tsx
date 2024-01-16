import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import AudioPlayer from "./Components/AudioPlayer";

const App = () => {
  const [currentSong, setCurrentSong] = useState({
    src: "/assets/audio/test1.mp3",
  });
  // const [newCurrentSong, setNewCurrentSong] = useState();
  // React.useEffect (()=> {
  //   setCurrentSong(new currentSong())
  // }, [])

  return (
    <>
      <CssBaseline enableColorScheme />
      <AudioPlayer
        currentSong={currentSong.src}
        songCount={3}
        songIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </>
  );
};

export default App;
