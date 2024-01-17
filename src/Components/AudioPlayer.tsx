import React, { useRef, useState, useEffect, forwardRef } from "react";

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
  audios: { src: string; title: string }[];
  currentAudioIndex: number;
  onNext: () => void;
  onPrev: () => void;
  totalAudiosCount: number;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  controlPlayPauseRef: React.MutableRefObject<{
    toggle?: (() => void) | undefined;
  }>;
}
// keep this audio player accessible also

const AudioPlayer = ({
  audios,
  currentAudioIndex,
  onNext,
  onPrev,
  totalAudiosCount,
  isPlaying,
  setIsPlaying,
  audioRef,
  controlPlayPauseRef,
}: AudioPlayerProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);

  const [duration, setDuration] = useState<number>(0);
  const [currrentProgress, setCurrrentProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);

  const prevVolume = useRef<number>(volume);

  useEffect(() => {
    if (!audioRef.current || currentAudioIndex == -1) return;
    audioRef.current?.pause();
    setIsPlaying(false);
    audioRef.current.src = audios[currentAudioIndex].src;
    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  }, [currentAudioIndex]);

  function handleVolumeChange(volumeValue: number) {
    prevVolume.current = volume;
    audioRef.current!.volume = volumeValue;
    setVolume(volumeValue);
  }

  function toggleMuteUnmute() {
    if (volume === 0) {
      handleVolumeChange(prevVolume.current);
    } else {
      handleVolumeChange(0);
    }
  }

  function togglePlayPause() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying((state) => !state);
  }

  controlPlayPauseRef.current.toggle = togglePlayPause;

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> =
    function (evt) {
      const audio = evt.currentTarget;
      const duration = audio.duration;

      // console.log("audio.bufferred",audio.buffered,"start", audio.buffered.start(0), "end", audio.buffered.en);

      if (duration > 0) {
        for (let i = 0; i < audio.buffered.length; ++i) {
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
      {currentAudioIndex !== -1 && (
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
            onTimeUpdate={(evt) => {
              setCurrrentProgress(evt.currentTarget.currentTime);
              handleBufferProgress(evt);
            }}
            onProgress={handleBufferProgress}
          >
            <source type="audio/mpeg" src={audios[currentAudioIndex].src} />
          </audio>
          <AudioProgressBar
            duration={duration}
            buffered={buffered}
            currentProgress={currrentProgress}
            onChange={(evt) => {
              audioRef.current!.currentTime = evt.currentTarget.valueAsNumber;
              setCurrrentProgress(evt.currentTarget.valueAsNumber);
            }}
          />
        </>
      )}

      <Typography variant="h3" component="h2" color="primary">
        {currentAudioIndex === -1
          ? "Selet a song"
          : audios[currentAudioIndex].title}
      </Typography>
      <IconButton
        disabled={!isReady || currentAudioIndex === 0}
        onClick={onPrev}
      >
        <SkipPrevious color="primary" />
      </IconButton>
      <IconButton
        disabled={!isReady}
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {!isReady ? (
          <CircularProgress />
        ) : isPlaying ? (
          <PauseCircle color="primary" />
        ) : (
          <PlayCircle color="primary" />
        )}
      </IconButton>
      <IconButton
        disabled={!isReady || currentAudioIndex === totalAudiosCount - 1}
        onClick={onNext}
      >
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
