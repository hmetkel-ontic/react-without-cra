import React from "react";

import { usePagination, DOTS } from "../hooks";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const styles = {
  list: {
    width: {
      sm: "50%",
      xs: "100%",
    },
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
  listItem: {
    display: "inline-block",
  },
  listItemButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    fontSize: "12px",
  },
} as any;

interface Props {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  currentPage: number;
}

type ListItemIconButtonProps = {
  pageNumber: number;
  disabledPageNumber: number;
  onClick: () => void;
  icon: React.ReactNode;
};

function ListItemIconButton(props: ListItemIconButtonProps) {
  const { pageNumber, onClick, icon, disabledPageNumber } = props;

  return (
    <ListItem alignItems="center" disablePadding style={styles.listItem}>
      <ListItemButton
        disableRipple
        style={styles.listItemButton}
        disabled={pageNumber === disabledPageNumber}
        onClick={onClick}
      >
        <ListItemAvatar>{icon}</ListItemAvatar>
      </ListItemButton>
    </ListItem>
  );
}

export default function Pagination(props: Props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    pageSize,
    currentPage,
  } = props;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  // if there are less than 2 items in range we shall not render the pagination
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  function onNext() {
    onPageChange(currentPage + 1);
  }

  function onPrevious() {
    onPageChange(currentPage - 1);
  }

  const lastPage = Number(paginationRange.at(-1));

  return (
    <List sx={styles.list}>
      <ListItemIconButton
        disabledPageNumber={1}
        pageNumber={currentPage}
        onClick={onPrevious}
        icon={<ArrowBackIosNewIcon />}
      />
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <ListItem style={styles.listItem}>
              <ListItemButton style={styles.listItemButton}>
                &#8230;
              </ListItemButton>
            </ListItem>
          );
        }
        return (
          <ListItem alignItems="center" style={styles.listItem}>
            <ListItemButton
              sx={styles.listItemButton}
              onClick={() => onPageChange(Number(pageNumber))}
              selected={pageNumber === currentPage}
            >
              {pageNumber}
            </ListItemButton>
          </ListItem>
        );
      })}
      <ListItemIconButton
        pageNumber={currentPage}
        disabledPageNumber={lastPage}
        onClick={onNext}
        icon={<ArrowForwardIosIcon />}
      />
    </List>
  );
}
