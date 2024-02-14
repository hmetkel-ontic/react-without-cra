import React from "react";

import VirtualisedList from "./virtualisedList";
import Pagination from "./pagination";
import AudioLIstItem from "./audioListItem";

export default function PaginatedAudioList<T>(
  props: PaginatedAudioListProps<T & WithId>
) {
  const { audios, currentAudioIndex, isPlaying, handleAudioChange } = props;

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
        handleClick={handleAudioChange}
        renderItem={(item, index: number | undefined) =>
          index !== undefined ? (
            <AudioLIstItem
              index={index}
              currentAudioIndex={currentAudioIndex}
              isPlaying={isPlaying}
              audio={item as unknown as AudioProps}
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
