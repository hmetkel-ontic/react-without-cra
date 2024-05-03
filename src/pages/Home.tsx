import React from "react";

import _filter from "lodash/filter";

import {
  AudioPlayer,
  AudioList,
  PaginatedAudioList,
  Navbar,
  AlbumsCardsView,
} from "../components";

import { useAudioStore } from "../hooks";

const audios = [
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 1,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 2,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 3,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 4,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 5,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 6,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 7,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 8,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 9,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 10,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 11,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 12,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 13,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 14,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 15,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 16,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 17,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 18,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 19,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 20,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 21,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 22,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 23,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 24,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 25,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 26,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 27,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 28,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 29,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 30,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 31,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 32,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 33,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 34,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 35,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 36,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 37,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 38,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 39,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 40,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 41,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 42,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 43,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 44,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 45,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 46,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 47,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 48,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 49,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 50,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 51,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 52,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 53,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 54,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 55,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 56,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 57,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 58,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 59,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 60,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 61,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 62,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 63,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 64,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 65,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 66,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 67,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 68,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 69,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 70,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 71,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 72,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 73,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 74,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 75,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 76,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 77,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 78,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 79,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 80,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 81,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 82,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 83,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 84,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 85,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 86,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 87,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 88,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 89,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 90,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 91,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 92,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 93,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 94,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 95,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 96,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 97,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 98,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 99,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 100,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 101,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 102,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 103,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 104,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 105,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 106,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 107,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 108,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 109,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 110,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 111,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 112,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 113,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 114,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 115,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 116,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 117,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 118,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 119,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 120,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 121,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 122,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 123,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 124,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 125,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 126,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 127,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 128,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 129,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 130,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 131,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 132,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 133,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 134,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 135,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 136,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 137,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 138,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 139,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 140,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 141,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 142,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 143,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 144,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 145,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 146,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 147,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 148,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 149,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 150,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 151,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 152,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 153,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 154,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 155,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 156,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 157,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 158,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 159,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 160,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 161,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 162,
  },
  {
    src: "/assets/audio/the-day-of-a-test.mp3",
    title: "the-day-of-a-test",
    id: 163,
  },
  {
    src: "/assets/audio/printemps.mp3",
    title: "printemps",
    id: 164,
  },
  {
    src: "/assets/audio/pianesque.mp3",
    title: "pianesque",
    id: 165,
  },
];

// audios from pixabay

const Home = () => {
  const [view, setView] = React.useState<string>("list-view");
  const [currentAudioIndex, setCurrentAudioIndex] = React.useState<number>(0); // TODO: to update this to -1 later
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState("");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const { audioData, accessToken, updateAccessToken } = useAudioStore();

  const filteredAudios = React.useMemo(() => {
    if (!searchText) return audios;
    return _filter(audios, (audio) => {
      return audio.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [audios, searchText]);

  const controlPlayPauseRef = React.useRef<{ toggle: () => void }>({
    toggle: () => {},
  });

  function handleAudioChange(index: number) {
    setCurrentAudioIndex(index - 1);
    controlPlayPauseRef.current?.toggle();
  }

  function onViewChange(
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ): void {
    if (newView) {
      setView(newView);
    }
  }

  function handleSearchText(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <Navbar
        view={view}
        onViewChange={onViewChange}
        searchText={searchText}
        handleSearchText={handleSearchText}
      />

      {/* <AlbumsCardsView
        albums={_filter(
          audioData,
          (audio) => audio.album_type as AlbumsCardsViewProps
        )}
      /> */}

      <AudioPlayer
        audios={filteredAudios}
        currentAudioIndex={currentAudioIndex}
        onNext={() => setCurrentAudioIndex((index) => index + 1)}
        onPrev={() => setCurrentAudioIndex((index) => index - 1)}
        totalAudiosCount={audios.length}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        controlPlayPauseRef={controlPlayPauseRef}
      />

      {view === "list-view" ? (
        <AudioList
          audios={filteredAudios}
          currentAudioIndex={currentAudioIndex}
          isPlaying={isPlaying}
          handleAudioChange={handleAudioChange}
        />
      ) : (
        <PaginatedAudioList
          audios={filteredAudios}
          currentAudioIndex={currentAudioIndex}
          isPlaying={isPlaying}
          handleAudioChange={handleAudioChange}
        />
      )}
    </>
  );
};

export default Home;
