const playPauseButtons = {
  fontSize: {
    sm: 50,
    xs: 30,
  },
};

// need to consider other edge cases as well
function getFormattedTime(secs: number): string {
  const minutes = Math.floor(secs / 60);

  const seconds = Math.floor(secs - minutes * 60);

  return minutes + ':' + seconds;
}

export { playPauseButtons, getFormattedTime };
