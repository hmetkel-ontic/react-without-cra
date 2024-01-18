import React from "react";

import {
  Typography,
  IconButton,
  CircularProgress,
  Container,
  Grid,
  Box,
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

import { playPauseButtons } from "../utils";

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

  function handleVolumeChange(
    event: Event | null,
    value: number | number[],
    activeThumb: number
  ): void | undefined {
    prevVolume.current = volume;
    audioRef.current!.volume = value as number;
    setVolume(value as number);
  }

  function toggleMuteUnmute() {
    if (volume === 0) {
      handleVolumeChange(null, prevVolume.current, 0);
    } else {
      handleVolumeChange(null, 0, 0);
    }
  }

  function togglePlayPause() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying((state) => !state);
  }

  function handleProgressBarChange(
    event: Event,
    value: number | number[],
    activeThumb: number
  ): void | undefined {
    console.log(event.currentTarget, value);
    audioRef.current!.currentTime = value as number;
    setCurrrentProgress(value as number);
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
    <Container
      maxWidth={false}
      sx={{ position: "absolute", bottom: 0, bgcolor: "#111", flexGrow: 1 }}
    >
      {currentAudioIndex !== -1 && (
        <Grid container textAlign={"center"} alignItems={"center"} columns={16}>
          <Grid item md={4} sm={3} xs={6}>
            <Typography variant="h6" component="h2" color="white">
              {currentAudioIndex === -1
                ? "Selet a song"
                : audios[currentAudioIndex].title}
            </Typography>
          </Grid>
          <Grid item md={8} xs={10}>
            <Box>
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
              <IconButton
                disabled={!isReady || currentAudioIndex === 0}
                onClick={onPrev}
              >
                <SkipPrevious
                  color={currentAudioIndex === 0 ? "secondary" : "warning"}
                  sx={playPauseButtons}
                />
              </IconButton>
              <IconButton
                disabled={!isReady}
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {!isReady ? (
                  <CircularProgress />
                ) : isPlaying ? (
                  <PauseCircle color="warning" sx={playPauseButtons} />
                ) : (
                  <PlayCircle color="warning" sx={playPauseButtons} />
                )}
              </IconButton>
              <IconButton
                disabled={
                  !isReady || currentAudioIndex === totalAudiosCount - 1
                }
                onClick={onNext}
              >
                <SkipNext
                  color={
                    currentAudioIndex === totalAudiosCount - 1
                      ? "secondary"
                      : "warning"
                  }
                  sx={playPauseButtons}
                />
              </IconButton>
            </Box>
            <AudioProgressBar
              duration={duration}
              buffered={buffered}
              currentProgress={currrentProgress}
              handleProgressBarChange={handleProgressBarChange}
            />
          </Grid>
          <Grid item md={2} />
          <Grid
            item
            md={2}
            sm={3}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {isReady && (
              <VolumeInput
                volume={volume}
                onVolumeChange={handleVolumeChange}
              />
            )}

            <IconButton
              disabled={!isReady}
              onClick={toggleMuteUnmute}
              aria-label={!volume ? "Unmute" : "Mute"}
            >
              {!volume ? (
                <VolumeOff color="secondary" />
              ) : (
                <VolumeUp color="warning" />
              )}
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default AudioPlayer;
