import React, { useState } from "react";
import { Paper, InputBase, Divider, Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import {
  SEARCH_QUESTIONS_PLEACEHOLDER,
  NO_QUESTIONS
} from "../constants/mulitple-select.constants";

const useStyles = makeStyles(theme =>
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
    input: {
      flex: 1,
      height: 54
    },
    textWrapper: {
      display: "flex",
      justifyContent: "space-between",
      minHeight: 50,
      alignItems: "center",
      "&:hover": {
        color: "#3DBED2"
      }
    },
    textWrapperDisabled: {
      display: "flex",
      justifyContent: "space-between",
      minHeight: 50,
      alignItems: "center",
      opacity: 0.3
    },
    input: {
      width: "100%"
    },
    optionText: {
      fontSize: "15px",
      fontWeight: "bold"
    },
    noQuestion: {
      width: "100%",
      textAlign: "center"
    },
    addIcon: {
      cursor: "pointer"
    },
    divider: {
      height: 1,
      margin: "15px 0"
    },
    paper: {
      width: "300px"
    },
    inputWrapper: {
      padding: 20
    }
  })
);
const QuestionsFields = [
  { id: 1, question: "Budget", disabled: false },
  { id: 2, question: "Food allergies", disabled: false },
  { id: 3, question: "Number of people", disabled: false },
  { id: 4, question: "Special restictions", disabled: false }
];

const MultipleSelect = () => {
  const [questions, setQuestions] = useState(QuestionsFields);
  const classes = useStyles();

  const handleSearchQuestions = event => {
    const filteredQuestions =
      QuestionsFields &&
      QuestionsFields.length > 0 &&
      QuestionsFields.filter(function (obj) {
        return obj.question.toLowerCase().includes(event.target.value.toLowerCase());
      });
    if (filteredQuestions.length > 0) {
      setQuestions(filteredQuestions);
    } else {
      setQuestions([]);
    }
  };

  const handleOnChange = event => {
    event.persist();
    handleSearchQuestions(event);
  };

  const handleOptionClick = option => {
    const filteredQuestions =
      QuestionsFields &&
      QuestionsFields.length > 0 &&
      QuestionsFields.map(obj => {
        if (obj.id === option.id) {
          obj.disabled = true;
          return obj;
        }
        return obj;
      });

    setQuestions(filteredQuestions);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={8} className={classes.wrapper}>
          <Paper className={classes.paper}>
            <div className={classes.inputWrapper}>
              <InputBase
                className={classes.input}
                placeholder={SEARCH_QUESTIONS_PLEACEHOLDER}
                inputProps={{ className: classes.input }}
                onKeyPress={handleSearchQuestions}
                onChange={handleOnChange}
              />
              <Divider className={classes.divider} />
              {questions.length > 0 ? (
                questions.map(qustionsObj => {
                  return (
                    <div
                      key={qustionsObj.id}
                      className={
                        qustionsObj.disabled
                          ? classes.textWrapperDisabled
                          : classes.textWrapper
                      }
                    >
                      <Typography className={classes.optionText}>
                        {qustionsObj.question}
                      </Typography>
                      {qustionsObj.disabled ? (
                        <DoneIcon />
                      ) : (
                        <AddIcon
                          onClick={() => handleOptionClick(qustionsObj)}
                          className={classes.addIcon}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                <div className={classes.noQuestion}>{NO_QUESTIONS} </div>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultipleSelect;
