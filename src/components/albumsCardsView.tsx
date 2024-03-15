import React from "react";

import _map from "lodash/map";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AlbumsCardsView(props: AlbumsCardsViewProps) {
  const { albums } = props;
  console.log("albums >> ", albums);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: "30px",
        }}
      >
        <Grid container spacing={4}>
          {_map(albums, (album) => (
            <Grid key={album.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: 320,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <CardMedia
                  height="240"
                  component="img"
                  image={album.images[1].url}
                  alt={album.title}
                  sx={{
                    transition: "all 0.2s ease-in",
                    "&:hover": {
                      scale: "1.1",
                      opacity: "0.9",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    textOverflow={"ellipsis"}
                    color="blueviolet"
                  >
                    {album.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
