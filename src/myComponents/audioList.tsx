import React from "react";

import { Container, Typography } from "@mui/material";

import VirtualisedList from "./virtualisedList";
import AudioLIstItem from "./audioListItem";

export default function AudioList(props: AudioListProps) {
  const { audios, currentAudioIndex, isPlaying, handleAudioChange } = props;

  return (
    <Container maxWidth={"sm"}>
      <VirtualisedList<AudioProps>
        listContainerWidth={500}
        listItemHeight={60}
        items={audios}
        handleClick={handleAudioChange}
        renderItem={(audio: AudioProps, index: number | undefined) =>
          index !== undefined ? (
            <AudioLIstItem
              index={index}
              currentAudioIndex={currentAudioIndex}
              isPlaying={isPlaying}
              audio={audio}
            />
          ) : (
            <Typography color="warning">No Items to display in List</Typography>
          )
        }
      />
    </Container>
  );
}
