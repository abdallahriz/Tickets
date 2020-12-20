import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    sideMenu: {
      backgroundColor: "white",
      height: "100%",
      border: "4px solid #88A8CB",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },

    avatar: {
      padding: 6,
      cursor: "pointer"
    },
    avatarWithMargin: {
      padding: 6,
      cursor: "pointer",
      margin: 15,
      border: "3px solid #7F8C8D  !important"
    },
    userAvatar: {
      padding: 6,
      width: 50,
      height: 50,
      "& > img": {
        borderRadius: 50
      }
    },
    badge: {
      margin: 15
    },
    bottomRightBadge: {
      right: 10,
      bottom: 4,
      padding: 5,
      borderRadius: 8
    },
    userBadge: {
      margin: 15
    },
    newBadge: {
        backgroundColor: "#3DBED2"
    },
    hasNewMessageBadge: {
        backgroundColor: "#E06868"
    },
    snoozedBadge:{
        backgroundColor: "#FEC573"
    }
  })
);
