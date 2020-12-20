import React, { Fragment } from "react";
import { Avatar, Badge } from "@material-ui/core";
import { statusTypes } from '../../../containers/Tickets/Ticket';
import { useStyles } from './TicketsMenu.style'

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
