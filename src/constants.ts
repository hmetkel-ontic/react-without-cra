const LIST_CONTAINER_HEIGHT = 720;
const LIST_CONTAINER_WIDTH = 320;
const LIST_ITEM_HEIGHT = 24;
const BUFFER = 5;
const items = Array.from({ length: 1000 }).map((_, i) => `Item ${i + 1}`);

export {
  LIST_CONTAINER_HEIGHT,
  LIST_CONTAINER_WIDTH,
  LIST_ITEM_HEIGHT,
  items,
  BUFFER,
};
