import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center"
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      flex: 1,
      height: 54
    },
    textWrapper: {
      display: "flex",
      justifyContent: "space-between",
      minHeight: 50,
      alignItems: "center",
      "&:hover": {
        color: "#3DBED2"
      }
    },
    textWrapperDisabled: {
      display: "flex",
      justifyContent: "space-between",
      minHeight: 50,
      alignItems: "center",
      opacity: 0.3
    },
    input: {
      width: "100%"
    },
    optionText: {
      fontSize: "15px",
      fontWeight: "bold"
    },
    noQuestion: {
      width: "100%",
      textAlign: "center"
    },
    addIcon: {
      cursor: "pointer"
    },
    divider: {
      height: 1,
      margin: "15px 0"
    },
    paper: {
      width: "300px"
    },
    inputWrapper: {
      padding: 20
    }
  })
);
