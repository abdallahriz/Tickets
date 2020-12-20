import React, { useState, useRef } from "react";
import { Typography, IconButton, InputBase, CircularProgress } from "@material-ui/core";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArchiveIcon from "@material-ui/icons/Archive";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import SendIcon from "@material-ui/icons/Send";
import Timer from "../../timer/timer";
import {
  THERE_IS_NO_MESSAGES,
  MESSAGE_TEXT_FIELD_PLACE_HOLDER
} from "../../../constants/ticket.constants";
import { useStyles } from "./MessagesAndActions.style";

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
