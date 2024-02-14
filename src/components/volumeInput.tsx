import React from "react";

import { Slider } from "@mui/material";

interface VolumeInputProps {
  volume: number;
  onVolumeChange:
    | ((event: Event, value: number | number[], activeThumb: number) => void)
    | undefined;
}

export default function VolumeInput({
  volume,
  onVolumeChange,
}: VolumeInputProps) {
  return (
    <Slider
      aria-label="Volume Slider"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      color="warning"
      onChange={onVolumeChange}
    />
  );
}
