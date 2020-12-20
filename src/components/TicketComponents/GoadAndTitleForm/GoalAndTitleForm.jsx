import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
} from "../../../constants/ticket.constants";
import { useStyles } from "./GoalAndTitleForm.style";

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
                        {Array.isArray(options) &&
                          options.length > 0 &&
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
