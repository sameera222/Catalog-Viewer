import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";

interface Props {
  catalogs: { thumb: string; image: string; description: string }[];
  activeIndex: number;
  handlePlayClick: () => void;
  isSliding: boolean;
}

const Img = styled("img")({
  maxWidth: "100%",
  minHeight: "90vh",
});

function ImageGallery({
  catalogs,
  activeIndex,
  isSliding,
  handlePlayClick,
}: Props) {

  const activeCatalog = catalogs[activeIndex];

  return (
    <Paper
      sx={{
        p: 4,
        marginTop: 5,
        maxWidth: "100%",
        minHeight: "90vh",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={8}>
          <ButtonBase sx={{ maxWidth: "100%", maxHeight: "100vh" }}>
            <Img alt="Gallery" src={activeCatalog.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {activeCatalog.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" ,alignItems: "center",  display: "flex", flexDirection: "column"}}>
              {isSliding ? (
                <PauseCircleOutlineRoundedIcon
                  onClick={handlePlayClick}
                  sx={{ fontSize: "8rem" }}
                />
              ) : (
                <PlayCircleOutlineIcon
                  onClick={handlePlayClick}
                  sx={{ fontSize: "8rem" }}
                />
              )}
            </Typography>
           </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default ImageGallery;
