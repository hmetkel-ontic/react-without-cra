import React from "react";

import VirtualisedList from "./virtualisedList";
import Pagination from "./pagination";
import AudioLIstItem from "./audioListItem";

export default function PaginatedAudioList<T>(
  props: PaginatedAudioListProps<T>
) {
  const {
    audios,
    currentAudioIndex,
    isPlaying,
    controlPlayPauseRef,
    setCurrentAudioIndex,
  } = props;

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);

  const currentAudios = React.useMemo(() => {
    const firstIndex = (currentPage - 1) * pageSize;
    const lastIndex = firstIndex + pageSize;

    return audios.slice(firstIndex, lastIndex);
  }, [currentPage]);

  return (
    <>
      <VirtualisedList<T>
        listContainerWidth={500}
        listItemHeight={60}
        items={currentAudios}
        renderItem={(audio: T, index: number | undefined) =>
          index !== undefined ? (
            <AudioLIstItem
              index={index}
              currentAudioIndex={currentAudioIndex}
              isPlaying={isPlaying}
              audio={audio as AudioProps}
              controlPlayPauseRef={controlPlayPauseRef}
              setCurrentAudioIndex={setCurrentAudioIndex}
            />
          ) : null
        }
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={audios.length}
        pageSize={pageSize}
      />
    </>
  );
}
