import React from "react";

import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme as themeObject } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { useAudioStore } from "./hooks";
import { Home } from "./pages";

const CLIENT_ID = "f579ab6901f345af96a2471bcbaa8f0f";
const CLIENT_SECRET = "fa7d8f4fea7b4b2d81c9f9a16349f864";

async function getAccessToken() {
  const getAccessTokenURL = "https://accounts.spotify.com/api/token";
  const optionsForAccessToken = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
  };

  const response = await fetch(getAccessTokenURL, optionsForAccessToken);
  const json = await response.json();

  return json.access_token;
}

const App = () => {
  const queryClient = new QueryClient();

  const theme = React.useMemo(() => themeObject, [themeObject]);

  const { accessToken, updateAccessToken } = useAudioStore();

  React.useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((token) => {
        updateAccessToken(token);
      });
    }
  }, [accessToken]);

  console.log("accesstoken >> ", accessToken);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <CssBaseline enableColorScheme />

        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" // todo implment theme later
          />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
