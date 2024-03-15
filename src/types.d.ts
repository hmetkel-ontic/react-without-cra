declare interface AudioProps {
  src: string;
  title: string;
  id: number;
}

declare type State = {
  accessToken: string;
  audioData: any[];
  loading: boolean;
  error: any;
};

declare type AlbumsCardsViewProps = {
  albums: State["audioData"];
};

declare type Action = {
  updateAccessToken: (accessToken: State["accessToken"]) => void;
  updateAudioData: (newAudioData: State["audioData"]) => void;
  updateLoading: (loading: State["loading"]) => void;
  updateError: (error: State["error"]) => void;
};

interface AudioListProps {
  audios: AudioProps[];
  currentAudioIndex: number;
  isPlaying: boolean;
  handleAudioChange: (index: number) => void;
}

declare interface WithId {
  id: number;
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
  handleAudioChange: (index: number) => void;
}

declare interface NavbarProps {
  view: string;
  onViewChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newView: string
  ) => void;
}
