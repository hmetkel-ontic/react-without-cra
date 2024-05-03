import React from "react";

import { useQuery } from "react-query";

import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import InputBase from "@mui/material/InputBase";

// icons
import ViewListIcon from "@mui/icons-material/ViewList";
import TableChartIcon from "@mui/icons-material/TableChart";
import SearchIcon from "@mui/icons-material/Search";
import { useAudioStore, useFetch } from "../hooks";
import { toast } from "react-toastify";

// renderers
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 16,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar(props: NavbarProps) {
  const { view, onViewChange, searchText, handleSearchText } = props;

  const { accessToken, updateAudioData, updateError } = useAudioStore();

  function search() {
    // todo: remove default taylor swift search
    const searchURL =
      "https://api.spotify.com/v1/search?q=" +
      "taylor" +
      "&type=album%2Cplaylist";
    return fetch(searchURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        throw new Error("Error fetching search results " + err.message);
      });
  }

  const result = useQuery({
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.error.message);
        return;
      }
      const updatedAudios = [...data?.albums?.items, ...data?.playlists?.items];
      console.log("updated audios from spotify search", updatedAudios);
      updateAudioData(updatedAudios);
    },
    onError: (err) => {
      console.log("error >> ", err);
    },
    queryKey: ["Search", searchText],
    queryFn: search,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Audio Player
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={handleSearchText}
            />
          </Search>
          <ToggleButtonGroup exclusive value={view} onChange={onViewChange}>
            <ToggleButton value="list-view">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="paginated-view">
              <TableChartIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
