import React, { useEffect, useState, Fragment } from "react";
import { Badge, Grid } from "@material-ui/core";

import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

import * as Yup from "yup";
import { TicketsMenu } from "../components/ticketComponents/ticketsMenu";
import { AddGoalAndTitleForm } from "../components/ticketComponents/addGoalAndTitleForm";
import { MessagesAndActions } from "../components/ticketComponents/messagesAndActions";
import { arrayMove } from "../utils";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },

    container: {
      height: "100vh"
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

const listOFTickets = [
  {
    ticket: {
      id: 1111,
      title: "New Task",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  },
  {
    ticket: {
      id: 2222,
      title: "New Task2",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  },
  {
    ticket: {
      id: 3331,
      title: "New Task3",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  },
  {
    ticket: {
      id: 3533,
      title: "New Task4",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  },
  {
    ticket: {
      id: 3333,
      title: "New Task5",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  },
  {
    ticket: {
      id: 3334,
      title: "New Task6",
      assigne: "Abdallah Rizeq",
      status: "New",
      Goal: "Buy a product"
    }
  }
];

const statusTypes = {
  New: "New",
  Closed: "Closed",
  Has_New_Message: "Has_New_Message",
  Snoozed: "Snoozed"
};

const Ticket = () => {
  const classes = useStyles();

  const [tickets, setTickets] = useState(listOFTickets);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [shouldDisableMessageText, setShouldDisableMessageText] = useState(true);
  const [messages, setMessages] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
  const [selectedTicketMessages, setSelectedTicketMessages] = useState(tickets[0]);

  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const handleSetSelectedTiket = ticket => {
    setSelectedTicket(ticket);
  };

  const options = [
    { option: " Buy a Product", value: 0 },
    { option: " Cancel an account", value: 1 },
    { option: " Buy and recommend a gift", value: 2 },
    { option: " Ask For Business", value: 3 }
  ];


  const initialValues = {
    goal: options[0],
    taskName: ""
  };
  const validationSchema = Yup.object().shape({
    goal: Yup.string().required("Required"),
    taskName: Yup.string()
      .required("Required")
      .min(0, "Negative Number")
      .max(25, "Should be less than 25 character")
  });

  const handleSumbit = () => {
    setIsActive(true);
    setShouldDisableMessageText(false);
  };

  const getBadgeColor = status => {
    switch (status) {
      case statusTypes.New:
        return "#3DBED2";
      case statusTypes.Has_New_Message:
        return "#E06868";
      case statusTypes.Snoozed:
        return "#FEC573";
      default:
        break;
    }
  };

  const handleSendMessage = value => {
    setMessages([
      ...messages,
      {
        value: value,
        time: new Date(Date.now()).toString(),
        tickedId: selectedTicket.ticket.id
      }
    ]);
    setSelectedTicketMessages([
      ...selectedTicketMessages,
      {
        value: value,
        time: new Date(Date.now()).toString(),
        tickedId: selectedTicket.ticket.id
      }
    ]);

    const ticketsArray = tickets;
    const filteredTickets =
      ticketsArray.length > 0 &&
      ticketsArray.map(ticketObj => {
        if (ticketObj.ticket.id === selectedTicket.ticket.id) {
          ticketObj.ticket.status = statusTypes.Has_New_Message;
          return ticketObj;
        }
        return ticketObj;
      });
    setTickets(filteredTickets);
  };

  const deleteTicket = () => {
    const ticketsArray = tickets;
    const filteredTickets =
      ticketsArray.length > 0 &&
      ticketsArray.filter(ticketObj => {
        if (ticketObj.ticket.id === selectedTicket.ticket.id) {
          ticketObj.ticket.status = statusTypes.Closed;
          return;
        }
        return ticketObj;
      });

    setSelectedTicket(filteredTickets[0]);
    setTickets(filteredTickets);
  };

  const handleChangeTicketStatusToSnoozed = () => {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
    const ticketsArray = tickets;
    //move snoozed ticket to the last of the array
    ticketsArray.length > 0 &&
      ticketsArray.map((ticketObj, index) => {
        if (ticketObj.ticket.id === selectedTicket.ticket.id) {
          ticketObj.ticket.status = statusTypes.Snoozed;
          setTickets(arrayMove(ticketsArray, index, ticketsArray.length - 1));
        }
      });
  };

  useEffect(() => {
    setIsLoadingMessages(true);
    //get selected ticket messages
    const selectedTicketMessages =
      messages &&
      messages.length > 0 &&
      messages.filter(message => {
        if (message.tickedId === selectedTicket.ticket.id) {
          return message;
        }
      });

    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
    setTimeout(() => {
      if (selectedTicketMessages && selectedTicketMessages.length > 0) {
        setSelectedTicketMessages(selectedTicketMessages);
      } else {
        setSelectedTicketMessages([]);
      }
      setIsLoadingMessages(false);
    }, 1000);
  }, [selectedTicket]);

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={1}>
          <TicketsMenu
            tickets={tickets}
            getBadgeColor={getBadgeColor}
            selectedTicket={selectedTicket}
            handleSetSelectedTiket={handleSetSelectedTiket}
          />
        </Grid>
        <Grid item xs={4}>
          <AddGoalAndTitleForm
            initialValues={initialValues}
            handleSumbit={handleSumbit}
            validationSchema={validationSchema}
            options={options}
          />
        </Grid>
        <Grid item xs={7}>
          <MessagesAndActions
            selectedTicket={selectedTicket}
            setSecond={setSecond}
            setMinute={setMinute}
            setIsActive={setIsActive}
            setCounter={setCounter}
            counter={counter}
            isActive={isActive}
            minute={minute}
            second={second}
            handleChangeTicketStatusToSnoozed={handleChangeTicketStatusToSnoozed}
            deleteTicket={deleteTicket}
            messages={selectedTicketMessages}
            shouldDisableMessageText={shouldDisableMessageText}
            handleSendMessage={handleSendMessage}
            isLoadingMessages={isLoadingMessages}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ticket;
