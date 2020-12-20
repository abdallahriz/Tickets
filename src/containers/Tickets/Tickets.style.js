import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },

    container: {
      height: "100vh"
    }
  })
);