import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    controlPaper: {
      backgroundColor: "#F7F7F7",
      height: "100%",
      position: "relative"
    },
    inputsWrapper: {
      padding: "25px 53px"
    },
    classifyHeader: {
      color: "#3DBED2",
      borderBottom: "3px solid #3DBED2",
      width: 78,
      fontSize: 20,
      fontWeight: "bold"
    },
    whatIsUserSelect: {
      margin: "23px 0px"
    },
    whatIsUserQ: {
      opacity: 0.6
    },
    selectWrapper: {
      display: "flex",
      margin: "10px 0",
      flexDirection: "column"
    },
    taskNameWrapper: {
      margin: "15px 0"
    },
    textfieldHeader: {
      opacity: 0.6
    },
    TextField: {
      margin: "5px 0",
      width: "70%",
      border: "1px solid #D0D0D0",
      borderRadius: 5,
      "& > div": {
        "& > fieldset": {
          border: 0
        }
      }
    },
    textfieldInfo: {
      opacity: 0.6,
      fontSize: 14
    },
    proceedButton: {
      position: "absolute",
      bottom: 21,
      right: 30,
      color: "white",
      backgroundColor: " #3DBED2",
      "&:hover": {
        backgroundColor: "rgb(61, 190, 210, 0.5)"
      }
    },
    input: {
      padding: 10,
      width: "100%"
    },
    formControl: {
      maxWidth: 140
    },
    form: {
      height: "100%"
    }
  })
);