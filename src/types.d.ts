declare interface AudioProps {
  src: string;
  title: string;
}

interface AudioListProps {
  audios: AudioProps[];
  currentAudioIndex: number;
  isPlaying: boolean;
  handleAudioChange: (index: number) => void;
}

declare interface AudioListItemProps {
  index: number;
  currentAudioIndex: number;
  audio: AudioProps;
  isPlaying: boolean;
}

declare interface VirtualisedListProps<T> {
  items: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  listContainerHeight?: number;
  listContainerWidth?: number;
  listItemHeight?: number;
  buffer?: number;
  handleClick?: (index: number) => void;
}

declare interface PaginatedAudioListProps<T> {
  audios: T[];
  currentAudioIndex: number;
  isPlaying: boolean;
  controlPlayPauseRef: React.MutableRefObject<{
    toggle: () => void;
  }>;
  setCurrentAudioIndex: React.Dispatch<React.SetStateAction<number>>;
}
