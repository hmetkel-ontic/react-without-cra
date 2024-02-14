import React from "react";

import { Container } from "@mui/material";

import VirtualisedList from "./virtualisedList";
import AudioLIstItem from "./audioListItem";

export default function AudioList(props: AudioListProps) {
  const {
    audios,
    currentAudioIndex,
    isPlaying,
    setCurrentAudioIndex,
    controlPlayPauseRef,
  } = props;

  return (
    <Container maxWidth={"md"}>
      <VirtualisedList<AudioProps>
        listContainerWidth={500}
        listItemHeight={60}
        items={audios}
        renderItem={(audio: AudioProps, index: number | undefined) =>
          index !== undefined ? (
            <AudioLIstItem
              index={index}
              currentAudioIndex={currentAudioIndex}
              isPlaying={isPlaying}
              audio={audio}
              controlPlayPauseRef={controlPlayPauseRef}
              setCurrentAudioIndex={setCurrentAudioIndex}
            />
          ) : null
        }
      />
    </Container>
  );
}
