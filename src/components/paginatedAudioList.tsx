import React from "react";
import VirtualisedList from "./virtualisedList";
import Pagination from "./pagination";

interface Props<T> {
  data: T[];
}

export default function PaginatedAudioList<T>(props: Props<T>) {
  const { data } = props;

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);

  const currentAudios = React.useMemo(() => {
    const firstIndex = (currentPage - 1) * pageSize;
    const lastIndex = firstIndex + pageSize;

    return data.slice(firstIndex, lastIndex);
  }, [currentPage]);

  return (
    <>
      <VirtualisedList<T>
        items={currentAudios}
        renderItem={(audio: T, index) =>
          index !== undefined ? <div>audio-{index + 1}</div> : null
        }
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={data.length}
        pageSize={pageSize}
      />
    </>
  );
}
