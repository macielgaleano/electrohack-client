import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import "./home.css";
import GridList from "@material-ui/core/GridList";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

export default function Product({ item }) {
  console.log(item);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));
  const classes = useStyles();

  return (
    <GridList>
      <img src={item.pictures[0]} alt={item.name} />
      {/* <GridList
        title={list.title}
        subtitle={<span>by: {list.description}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${list.title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      /> */}
    </GridList>
  );
}
