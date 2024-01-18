import React from "react";

interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number;
  "--buffered-width": number;
}

import { Box, Typography, Slider } from "@mui/material";

import { getFormattedTime } from "../utils";
import { CurrencyPound } from "@mui/icons-material";

interface AudioProgressBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  duration: number;
  currentProgress: number;
  buffered: number;
  handleProgressBarChange:
    | ((event: Event, value: number | number[], activeThumb: number) => void)
    | undefined;
}

function FormattedTime({ currentTime }: { currentTime: number }) {
  return (
    <Typography variant="body1" color="#eee">
      {getFormattedTime(currentTime)}
    </Typography>
  );
}

export default function AudioProgressBar({
  duration,
  currentProgress,
  buffered,
  handleProgressBarChange,
}: AudioProgressBarProps) {
  const progressBarWidth = !duration ? 0 : currentProgress / duration;
  const bufferedWidth = !duration ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
    width: "90%",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormattedTime currentTime={currentProgress} />
        <Slider
          min={0}
          max={duration}
          aria-label="Audio Progress Bar"
          style={progressStyles}
          value={currentProgress}
          onChange={handleProgressBarChange}
          color="warning"
          size="small"
          valueLabelDisplay={"auto"}
          valueLabelFormat={(value: number) => getFormattedTime(value)}
        />
        <FormattedTime currentTime={duration} />
      </Box>
    </>
  );
}
