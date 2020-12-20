import React, { useState, useRef } from "react";
import { Typography, IconButton, InputBase, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArchiveIcon from "@material-ui/icons/Archive";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import SendIcon from "@material-ui/icons/Send";
import Timer from "../timer/timer";
import {
  THERE_IS_NO_MESSAGES,
  MESSAGE_TEXT_FIELD_PLACE_HOLDER
} from "../../constants/ticket.constants";

const useStyles = makeStyles(theme =>
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
      //   height: "calc(100vh - 145px)",
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

export const MessagesAndActions = props => {
  const classes = useStyles();
  const [messageFieldValue, setMessageFieldValue] = useState("");
  const {
    selectedTicket,
    setSecond,
    setMinute,
    setIsActive,
    setCounter,
    counter,
    isActive,
    minute,
    second,
    handleChangeTicketStatusToSnoozed,
    deleteTicket,
    messages,
    shouldDisableMessageText,
    handleSendMessage,
    isLoadingMessages
  } = props;
  const ref = useRef();

  const handleOnKeyMessagePress = event => {
    try {
      if (event.key === "Enter") {
        handleSendMessage(event.target.value);
        setMessageFieldValue("");
      }
    } catch {}
  };

  const handleOnChange = event => {
    try {
      setMessageFieldValue(event.target.value);
    } catch {}
  };

  const handleOnSendClick = () => {
    try {
      handleSendMessage(messageFieldValue);
      setMessageFieldValue("");
    } catch {}
  };

  const heightOfTextField =
    ref && ref.current && ref.current.clientHeight ? ref.current.clientHeight + 56 : 0;
  const maxHeight = `calc(100vh - ${heightOfTextField}px)`;

  return (
    <div className={classes.resultPaper}>
      <div className={classes.tiketInfoWrapper}>
        <div className={classes.headerDiv}>
          <Typography className={classes.taskHeader}>
            {selectedTicket && selectedTicket.ticket && selectedTicket.ticket.title}
          </Typography>
          <div className={classes.actionsWrapper}>
            <div>
              <Timer
                setSecond={setSecond}
                setMinute={setMinute}
                setIsActive={setIsActive}
                setCounter={setCounter}
                counter={counter}
                isActive={isActive}
                minute={minute}
                second={second}
              />
            </div>
            <QueryBuilderIcon
              onClick={handleChangeTicketStatusToSnoozed}
              className={classes.stopTimer}
            />
            <ArchiveIcon
              disabled={!selectedTicket}
              onClick={deleteTicket}
              className={classes.archiveIcon}
            />
          </div>
        </div>
        {isLoadingMessages ? (
          <div className={classes.centerWrapper}>
            <CircularProgress />
          </div>
        ) : (
          <>
            {messages.length > 0 ? (
              <div style={{ maxHeight }} className={classes.messagesWrapper}>
                {messages.map(message => {
                  return (
                    <div className={classes.messageDiv}>
                      <div className={classes.message}>
                        <Typography className={classes.messageText}>
                          {message.value}
                        </Typography>
                      </div>
                      <div className={classes.circleAndTimeWrapper}>
                        <div className={`${classes.shape} ${classes.shapeCircle}`} />
                        <Typography className={classes.date}> {message.time} </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Typography className={classes.centerWrapper}>
                {THERE_IS_NO_MESSAGES}
              </Typography>
            )}
          </>
        )}
      </div>
      <div ref={ref} className={classes.messageTextField}>
        <div className={classes.messageField}>
          <IconButton
            disabled={shouldDisableMessageText}
            className={classes.iconButton}
            aria-label="menu"
          >
            <NotInterestedIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder={MESSAGE_TEXT_FIELD_PLACE_HOLDER}
            inputProps={{ "aria-label": "message" }}
            onKeyPress={handleOnKeyMessagePress}
            disabled={shouldDisableMessageText}
            multiline
            value={messageFieldValue}
            onChange={handleOnChange}
          />
          <IconButton
            disabled={shouldDisableMessageText}
            onClick={handleOnSendClick}
            aria-label="menu"
          >
            <SendIcon disabled={shouldDisableMessageText} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
