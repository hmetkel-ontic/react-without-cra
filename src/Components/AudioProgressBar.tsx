import React from "react";

interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number;
  "--buffered-width": number;
}

interface AudioProgressBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  duration: number;
  currentProgress: number;
  buffered: number;
}

export default function AudioProgressBar({
  duration,
  currentProgress,
  buffered,
  ...rest
}: AudioProgressBarProps) {
  const progressBarWidth = !duration ? 0 : currentProgress / duration;
  const bufferedWidth = !duration ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
    "width" : "90%"
  };

  return (
    <>
      <div>
        <input
          type="range"
          name="progress"
          aria-label="Audio Progress Bar"
          style={progressStyles}
          min={0}
          max={duration}
          value={currentProgress}
          className="progress-bar"
          {...rest}
        />
      </div>
    </>
  );
}
