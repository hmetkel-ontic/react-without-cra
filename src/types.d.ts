declare interface AudioProps {
  src: string;
  title: string;
}

interface AudioListProps {
  audios: AudioProps[];
  currentAudioIndex: number;
  isPlaying: boolean;
  setCurrentAudioIndex: React.Dispatch<React.SetStateAction<number>>;
  controlPlayPauseRef: React.MutableRefObject<{
    toggle: () => void;
  }>;
}

declare interface AudioListItemProps {
  index: number;
  currentAudioIndex: number;
  audio: AudioProps;
  isPlaying: boolean;
  controlPlayPauseRef: React.MutableRefObject<{
    toggle: () => void;
  }>;
  setCurrentAudioIndex: React.Dispatch<React.SetStateAction<number>>;
}

declare interface VirtualisedListProps<T> {
  items: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  listContainerHeight?: number;
  listContainerWidth?: number;
  listItemHeight?: number;
  buffer?: number;
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
