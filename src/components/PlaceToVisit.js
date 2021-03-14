import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
import ExploreIcon from "@material-ui/icons/Explore";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  exploreIcon: {
    color: "#5AFF3D",
    fontSize: "1.5rem",
  },
}));
export default function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ExploreIcon className={classes.exploreIcon} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}
