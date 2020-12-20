import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Formik, Form } from "formik";
import {
  FORM_HEADER,
  GOAL_SELECT_HEADER,
  TASK_NAME_FIELD_HEADER,
  CHARAC_LEFT,
  PROCEED,
  TASK_NAME_FIELD_PLEACE_HOLDER
} from "../../constants/ticket.constants";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    controlPaper: {
      backgroundColor: "#F7F7F7",
      height: "100%",
      position: "relative"
    },
    inputsWrapper: {
      padding: "25px 53px"
    },
    classifyHeader: {
      color: "#3DBED2",
      borderBottom: "3px solid #3DBED2",
      width: 78,
      fontSize: 20,
      fontWeight: "bold"
    },
    whatIsUserSelect: {
      margin: "23px 0px"
    },
    whatIsUserQ: {
      opacity: 0.6
    },
    selectWrapper: {
      display: "flex",
      margin: "10px 0",
      flexDirection: "column"
    },
    taskNameWrapper: {
      margin: "15px 0"
    },
    textfieldHeader: {
      opacity: 0.6
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
    textfieldInfo: {
      opacity: 0.6,
      fontSize: 14
    },
    proceedButton: {
      position: "absolute",
      bottom: 21,
      right: 30,
      color: "white",
      backgroundColor: " #3DBED2",
      "&:hover": {
        backgroundColor: "rgb(61, 190, 210, 0.5)"
      }
    },
    input: {
      padding: 10,
      width: "100%"
    },
    formControl: {
      maxWidth: 140
    },
    form: {
      height: "100%"
    }
  })
);

export const GoalAndTitleForm = props => {
  const classes = useStyles();
  const { initialValues, handleSumbit, validationSchema, options } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSumbit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, errors }) => {
        return (
          <Form className={classes.form}>
            <div className={classes.controlPaper}>
              <div className={classes.inputsWrapper}>
                <div>
                  <Typography className={classes.classifyHeader}>
                    {FORM_HEADER}
                  </Typography>
                </div>
                <div className={classes.whatIsUserSelect}>
                  <Typography className={classes.whatIsUserQ}>
                    {GOAL_SELECT_HEADER}
                  </Typography>
                  <div className={classes.selectWrapper}>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={values["goal"]}
                        name={"goal"}
                        disableUnderline
                        IconComponent={ExpandMoreIcon}
                        MenuProps={{
                          anchorReference: "anchorEl",
                          transformOrigin: { vertical: "top", horizontal: "left" }
                        }}
                        onChange={handleChange("goal")}
                      >
                        {Array.isArray(options) && options.length > 0 &&
                          options.map((option, index) => (
                            <MenuItem
                              key={option + index}
                              className={classes.select}
                              value={option.value}
                            >
                              {option.option}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    {errors.goal && (
                      <FormHelperText error={true}>{errors.goal}</FormHelperText>
                    )}
                  </div>
                  <div className={classes.taskNameWrapper}>
                    <Typography className={classes.textfieldHeader}>
                      {TASK_NAME_FIELD_HEADER}
                    </Typography>
                    <TextField
                      className={classes.TextField}
                      id="outlined-basic"
                      placeholder={TASK_NAME_FIELD_PLEACE_HOLDER}
                      variant="outlined"
                      value={values["taskName"]}
                      name="taskName"
                      onChange={handleChange("taskName")}
                      inputProps={{ className: classes.input }}
                    />
                    {errors.taskName ? (
                      <FormHelperText error={true}>{errors.taskName}</FormHelperText>
                    ) : (
                      <Typography className={classes.textfieldInfo}>
                        ({CHARAC_LEFT} {25 - values["taskName"].length})
                      </Typography>
                    )}
                  </div>
                  <Button
                    disabled={!values.taskName || !!errors.taskName || !!errors.goal}
                    type="submit"
                    className={classes.proceedButton}
                  >
                    {PROCEED}
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
