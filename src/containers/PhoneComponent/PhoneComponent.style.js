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
    input: {
      padding: 10,
      width: "100%"
    },
    paperRoot: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      boxShadow: "none",
      border: "1px solid rgba(0, 0, 0, 0.23)"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10,
      cursor: "pointer",
      opacity: 0.6
    },
    divider: {
      height: 28,
      margin: 4
    },
    flag: {
      fontSize: "38px"
    },
    serchInput: {
      width: "100%",
      padding: 12
    },
    option: {
      margin: 12,
      display: "flex",
      cursor: "pointer",
      alignItems: "center"
    },
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    },
    inputAndPaperWrapper: {
      display: "flex",
      flexDirection: "column"
    },
    phoneTypography: {
      opacity: 0.6,
      margin: "14px 0"
    },
    inputPaper: {
      marginTop: 15,
      maxHeight: "300px",
      overflow: "auto",
      maxWidth: "296px"
    },
    optionsWrapper: {
      margin: 12,
      display: "flex",
      alignItems: "center"
    },
    countryNameAndcodeTypo: {
      marginLeft: 20
    },
    noResult: {
      opacity: 0.6,
      margin: 12
    }
  })
);
