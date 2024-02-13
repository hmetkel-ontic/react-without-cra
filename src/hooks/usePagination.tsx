import React from "react";

interface Props {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount?: number;
}

export type RangeType = (number | string)[];

export const DOTS = "...";

export function usePagination(props: Props): RangeType {
  const { totalCount, pageSize, currentPage, siblingCount = 1 } = props;
  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = React.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // calculate left and right signlings index's and make sure they are withing the range of [1, totalPageCount]

    const leftSiblingIndex = Math.max(1, currentPage - siblingCount);
    const rightSiblingaindex = Math.min(
      totalPageCount,
      currentPage + siblingCount
    );

    // we do not show dots when there is just one page number to be inserted extremes is just one
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingaindex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
      Case 2:
      No left dots to show but right dots to show
     */

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemsCount = 3 + 2 * siblingCount; // firstItem + siblingOnLeft + siblingOnRight + currentItem + 1
      const leftRange = range(1, leftItemsCount);
      return [...leftRange, DOTS, lastPageIndex];
    }

    /*
      Case 3:
      No right dots to show but left dots to show
     */

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemsCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemsCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingaindex);

    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }, [totalCount, pageSize, currentPage, siblingCount]);

  return paginationRange;
}
