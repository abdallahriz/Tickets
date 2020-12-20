import React, { Fragment } from "react";
import { Avatar, Badge } from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import {statusTypes} from '../../containers/Ticket';

const useStyles = makeStyles(theme =>
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

export const EnhancedBadge = withStyles(theme => ({
  anchorOriginBottomRightRectangle: {
    backgroundColor: props => props.backgroundColor,
    right: 10,
    bottom: 4,
    padding: 5,
    borderRadius: 8
  }
}))(Badge);

export const TicketsMenu = props => {
  const { tickets, selectedTicket, handleSetSelectedTiket } = props;
  const classes = useStyles();

  const getBadgeClassName = (ticketStatus) => {
    switch (ticketStatus) {
        case statusTypes.New:
          return classes.newBadge;
        case statusTypes.Has_New_Message:
          return classes.hasNewMessageBadge;
        case statusTypes.Snoozed:
          return classes.snoozedBadge;
        default:
          break;
      }
  }
  
  return (
    <div className={classes.sideMenu}>
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        variant="dot"
        className={classes.userBadge}
        classes={{
          anchorOriginBottomRightRectangle: classes.bottomRightBadge
        }}
      >
        <Avatar
          className={classes.userAvatar}
          src={"https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"}
        />
      </Badge>
      {Array.isArray(tickets) && tickets.length > 0 &&
        tickets.map((ticketObj, index) => {
          const badgeClass = getBadgeClassName(ticketObj.ticket.status);
          return (
            <Fragment key={ticketObj.ticket.id}>
              {selectedTicket.ticket.id === ticketObj.ticket.id ? (
                <Avatar
                  onClick={() => handleSetSelectedTiket(ticketObj)}
                  className={classes.avatarWithMargin}
                >
                  {"T" + (index + 1)}
                </Avatar>
              ) : (
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  variant="dot"
                  className={classes.badge}
                  classes={{anchorOriginBottomRightRectangle: `${badgeClass} ${classes.bottomRightBadge}`}}
                >
                  <Avatar
                    onClick={() => handleSetSelectedTiket(ticketObj)}
                    className={classes.avatar}
                  >
                    {"T" + (index + 1)}
                  </Avatar>
                </Badge>
              )}
            </Fragment>
          );
        })}
    </div>
  );
};
