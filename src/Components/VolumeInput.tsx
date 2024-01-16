import React from "react";

interface VolumeInputProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function VolumeInput({
  volume,
  onVolumeChange,
}: VolumeInputProps) {
  return (
    <input
      aria-label="Volume"
      name="volume"
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(evt) => onVolumeChange(evt.currentTarget.valueAsNumber)}
    />
  );
}
