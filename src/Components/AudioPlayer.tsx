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

import AudioProgressBar from "./AudioProgressBar";
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

  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);

  const [duration, setDuration] = useState<number>(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);

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

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return (
    <>
      <Typography variant="h3" component="h1" color="secondary" align="center">
        Audio Player
      </Typography>
      {currentAudio && (
        <>
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
            onTimeUpdate={(e) => {
              setCurrrentProgress(e.currentTarget.currentTime);
              handleBufferProgress(e);
            }}
            onProgress={handleBufferProgress}
          >
            <source type="audio/mpeg" src={currentAudio.src} />
          </audio>
          <AudioProgressBar
            duration={duration}
            buffered={buffered}
            currentProgress={currrentProgress}
            onChange={(e) => {
              if (!audioRef.current) return;

              audioRef.current.currentTime = e.currentTarget.valueAsNumber;

              setCurrrentProgress(e.currentTarget.valueAsNumber);
            }}
          />
        </>
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
