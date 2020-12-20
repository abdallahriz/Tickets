import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useLoaderStyles = makeStyles(theme => ({
  backdrop: {
    color: "#fff"
  }
}));

export const Loader = props => {
  const classes = useLoaderStyles();

  return (
    <Backdrop open={!!props.open} className={classes.backdrop}>
      <CircularProgress thickness={3.6} size={70} />
    </Backdrop>
  );
};

export default Loader;
