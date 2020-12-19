import React, { useEffect, useState, Fragment } from "react";
import { Avatar, Badge } from "@material-ui/core";
import { makeStyles, createStyles, Theme, withStyles } from "@material-ui/core/styles";

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
  const { tickets, getBadgeColor, selectedTicket, handleSetSelectedTiket } = props;
  const classes = useStyles();
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
      {tickets.length > 0 &&
        tickets.map((ticketObj, index) => {
          const backgroundColor = getBadgeColor(ticketObj.ticket.status);
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
                <EnhancedBadge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  variant="dot"
                  className={classes.badge}
                  backgroundColor={backgroundColor}
                >
                  <Avatar
                    onClick={() => handleSetSelectedTiket(ticketObj)}
                    className={classes.avatar}
                  >
                    {"T" + (index + 1)}
                  </Avatar>
                </EnhancedBadge>
              )}
            </Fragment>
          );
        })}
    </div>
  );
};
