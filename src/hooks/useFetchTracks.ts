import React from "react";

export const fetchAccessToken = () => {
  const [token, setToken] = React.useState(null);

  const CLIENT_ID = "f579ab6901f345af96a2471bcbaa8f0f";
  const CLIENT_SECRET = "fa7d8f4fea7b4b2d81c9f9a16349f864";
  const url = "https://accounts.spotify.com/api/token";

  async function fetchData(url: string, fetchOptions: any) {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    console.log("Data >> ", data);

    setToken(data.access_token);
  }

  React.useEffect(() => {
    const fetchOptions = {
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
    fetchData(url, fetchOptions);
  }, []);

  return token;
};
