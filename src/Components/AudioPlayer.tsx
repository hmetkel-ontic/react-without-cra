import React, { useRef, useState } from "react";

import { Typography, IconButton, CircularProgress } from "@mui/material";

import {
  PlayCircle,
  PauseCircle,
  VolumeOff,
  VolumeUp,
  SkipPrevious,
  SkipNext,
} from "@mui/icons-material";

import VolumeInput from "./VolumeInput";

interface AudioPlayerProps {
  currentAudio: {
    [k: string]: string;
  } | null;
  currentAudioIndex: number;
  onNext: () => void;
  onPrev: () => void;
}
// keep this audio player accessible also

const AudioPlayer = ({
  currentAudio,
  currentAudioIndex,
  onNext,
  onPrev,
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);

  const prevVolume = useRef<number>(volume);

  function handleVolumeChange(volumeValue: number) {
    debugger;
    prevVolume.current = volume;
    audioRef.current!.volume = volumeValue;
    setVolume(volumeValue);
  }

  function togglePlayPause() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying((state) => !state);
  }

  function toggleMuteUnmute() {
    if (volume === 0) {
      handleVolumeChange(prevVolume.current);
    } else {
      handleVolumeChange(0);
    }
  }

  return (
    <>
      <Typography variant="h3" component="h1" color="secondary" align="center">
        Audio Player
      </Typography>
      {currentAudio && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(evt) => setDuration(evt.currentTarget.duration)}
          onCanPlay={(evt) => {
            evt.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source type="audio/mpeg" src={currentAudio.src} />
        </audio>
      )}

      <Typography variant="h3" component="h2" color="primary">
        {currentAudio?.title ?? "Selet a song"}
      </Typography>
      <IconButton disabled={!isReady} onClick={onPrev}>
        <SkipPrevious color="primary" />
      </IconButton>
      <IconButton
        disabled={!isReady}
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {!isReady && currentAudio ? (
          <CircularProgress />
        ) : isPlaying ? (
          <PauseCircle color="primary" />
        ) : (
          <PlayCircle color="primary" />
        )}
      </IconButton>
      <IconButton disabled={!isReady} onClick={onNext}>
        <SkipNext color="primary" />
      </IconButton>

      {isReady && (
        <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
      )}

      <IconButton
        disabled={!isReady}
        onClick={toggleMuteUnmute}
        aria-label={!volume ? "Unmute" : "Mute"}
      >
        {!volume ? <VolumeOff /> : <VolumeUp color="primary" />}
      </IconButton>
    </>
  );
};

export default AudioPlayer;
