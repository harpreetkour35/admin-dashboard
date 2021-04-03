import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "220px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

function Sidebar() {
  const classes = useStyles();
  return <div className={classes.sidebar}>Sidebar</div>;
}

export default Sidebar;
