import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import {
  LIST_ITEM_HEIGHT,
  LIST_CONTAINER_WIDTH,
  LIST_CONTAINER_HEIGHT,
  BUFFER,
} from "../constants";

const styles = {
  container: (height?: number, width?: number) => ({
    height,
    width,
    overflowY: "auto",
    margin: "auto",
  }),
  list: (paddingTop: number, paddingBottom: number) => ({
    paddingTop,
    paddingBottom,
  }),
  listItem: (height: number) => ({ height }),
} as any;

export default function VirtualisedList<T>(props: VirtualisedListProps<T>) {
  const {
    items,
    renderItem,
    listItemHeight = LIST_ITEM_HEIGHT,
    listContainerWidth = LIST_CONTAINER_WIDTH,
    listContainerHeight = LIST_CONTAINER_HEIGHT,
    buffer = BUFFER,
  } = props;

  const [scrollTop, setScrollTop] = React.useState(0);

  const firstItemIndex = Math.max(
    0,
    Math.floor(scrollTop / listItemHeight) - buffer
  );

  const lastItemIndex = Math.min(
    items.length,
    Math.ceil((scrollTop + listContainerHeight) / listItemHeight) + buffer
  );

  const itemsCount = lastItemIndex - firstItemIndex;
  const totalHeight = items.length * listItemHeight;
  const paddingTop = firstItemIndex * listItemHeight;
  const itemsHeight = itemsCount * listItemHeight;
  const paddingBottom = totalHeight - paddingTop - itemsHeight;
  const visibleItems = items.slice(firstItemIndex, lastItemIndex);

  return (
    <Box
      component="div"
      sx={styles.container(listContainerHeight, listContainerWidth)}
      onScroll={(event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollTop((event.target as HTMLDivElement).scrollTop);
      }}
    >
      <List style={styles.list(paddingTop, paddingBottom)}>
        {visibleItems.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            style={styles.listItem(listItemHeight)}
          >
            <ListItemButton sx={{ p: 0 }}>
              {renderItem(item, index)}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
