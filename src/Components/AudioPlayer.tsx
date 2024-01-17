import React from "react";

import {
  Typography,
  IconButton,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";

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

import { playPauseButtons, getFormattedTime } from "../utils";

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
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(0.2);

  const [duration, setDuration] = React.useState<number>(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);

  const prevVolume = React.useRef<number>(volume);

  React.useEffect(() => {
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
    <Container maxWidth={false} disableGutters>
      {currentAudioIndex !== -1 && (
        <Grid container textAlign={"center"} alignItems={"center"}>
          <Grid item sm={3} xs={6}>
            <IconButton
              disabled={!isReady || currentAudioIndex === 0}
              onClick={onPrev}
            >
              <SkipPrevious color="primary" sx={playPauseButtons} />
            </IconButton>
            <IconButton
              disabled={!isReady}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {!isReady ? (
                <CircularProgress />
              ) : isPlaying ? (
                <PauseCircle color="primary" sx={playPauseButtons} />
              ) : (
                <PlayCircle color="primary" sx={playPauseButtons} />
              )}
            </IconButton>
            <IconButton
              disabled={!isReady || currentAudioIndex === totalAudiosCount - 1}
              onClick={onNext}
            >
              <SkipNext color="primary" sx={playPauseButtons} />
            </IconButton>
          </Grid>
          <Grid item sm={9} xs={6}>
            <audio
              ref={audioRef}
              preload="metadata"
              onDurationChange={(evt) =>
                setDuration(evt.currentTarget.duration)
              }
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
          </Grid>
        </Grid>
      )}
      <Grid container px={4} spacing={1} textAlign={"center"} alignItems={"center"}>
        <Grid item xs={2}  sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="body1">
            {getFormattedTime(currrentProgress)} / {getFormattedTime(duration)}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5" component="h2" color="primary">
            {currentAudioIndex === -1
              ? "Selet a song"
              : audios[currentAudioIndex].title}
          </Typography>
        </Grid>

        <Grid
          item
          xs={5}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AudioPlayer;
