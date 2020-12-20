import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    resultPaper: {
      backgroundColor: "white",
      height: "100%",
      position: "relative"
    },
    tiketInfoWrapper: {
      padding: "25px"
    },
    taskHeader: {
      fontSize: 20,
      opacity: 0.6
    },
    headerDiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    actionsWrapper: {
      display: "flex",
      justifyContent: "space-around",
      width: 167,
      opacity: 0.6
    },
    messageTextField: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      minHeight: 90,
      boxShadow: "1px -1px 1px rgba(0,0,0,0.14)",
      display: "flex",
      alignItems: "center"
    },
    messageField: {
      padding: "0px 30px",
      width: "100%",
      display: "flex",
      alignItems: "center"
    },

    iconButton: {
      padding: 10
    },
    userBadge: {
      margin: 15
    },
    formControl: {
      maxWidth: 140
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    select: {
      fontSize: 17,
      fontWeight: "bold"
    },
    input: {
      padding: 10,
      width: "85%"
    },
    stopTimer: {
      cursor: "pointer"
    },
    messagesWrapper: {
      overflow: "auto"
    },
    centerWrapper: {
      height: "calc(100vh - 145px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    messageDiv: {
      margin: "20px 0"
    },
    message: {
      minHeight: "50px",
      backgroundColor: "#F7F7F7",
      maxWidth: "500px",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      borderRadius: 16,
      borderBottomLeftRadius: 3,
      display: "flex",
      alignItems: "center",
      wordBreak: "break-word"
    },
    messageText: {
      padding: "12px",
      opacity: 0.6
    },
    archiveIcon: {
      cursor: "pointer"
    },
    date: {
      fontSize: 14,
      opacity: 0.6,
      margin: "6px 0 6px 5px"
    },
    shape: {
      backgroundColor: "#3DBED2",
      width: 5,
      height: 5
    },
    shapeCircle: {
      borderRadius: "50%"
    },
    circleAndTimeWrapper: {
      display: "flex",
      alignItems: "center"
    }
  })
);