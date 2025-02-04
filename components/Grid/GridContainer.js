import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
  gridCenter: {
    justifyContent: "space-around !important"
  }
};

export default function GridContainer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { children, center, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ` ${center && classes.gridCenter}`}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
};
