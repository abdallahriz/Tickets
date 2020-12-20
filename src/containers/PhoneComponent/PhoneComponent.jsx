import React, { useState } from "react";
import {
  Typography,
  Grid,
  Grow,
  ClickAwayListener,
  Paper,
  InputBase
} from "@material-ui/core";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../../constants/CountriesList";
import {
  PHONE_NUMBER_PLACE_HOLDER,
  SEARCH_INPUT_PLEACE_HOLDER,
  NO_RESULT
} from "../../constants/phone.contants";
import { useStyles } from './PhoneComponent.style'

const PhoneComponent = () => {
  const classes = useStyles();
  const formattedCountriesList = Object.keys(countries).map(key => {
    countries[key]["sub_name"] = key;
    return countries[key];
  });

  const [countriesList, setCountriesList] = useState([]);
  const [openWidget, setOpenWidget] = useState(false);
  const [shouldShowNoResult, setShouldShowNoResult] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(formattedCountriesList[228]);
  const [searchTextFieldValue, setSerchTextFieldValue] = useState("");

  const handleSetSelectedCountry = country => {
    setSelectedCountry(country);
  };

  const handleOnChangeInput = event => {
    try {
    setSerchTextFieldValue(event.target.value);
    setShouldShowNoResult(true);

      if (event.target.value === "") {
        setShouldShowNoResult(false);
        setCountriesList([]);
        return;
      }
      const filteredQuestions =
        formattedCountriesList &&
        formattedCountriesList.length > 0 &&
        formattedCountriesList.filter(function (obj) {
          return (
            obj.code.toLowerCase().includes(event.target.value.toLowerCase()) ||
            obj.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
            obj.sub_name.toLowerCase().includes(event.target.value.toLowerCase())
          );
        });

      setCountriesList(filteredQuestions);
    } catch {}
  };

  const handleTextFieldOnFoucs = () => {
    setOpenWidget(true);
  };

  const handleCloseWidget = () => {
    setOpenWidget(false);
  };

  const handleChangePhoneInput = event => {
    setShouldShowNoResult(false);
    setCountriesList([]);
    setSerchTextFieldValue("")
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={8} className={classes.wrapper}>
          <ClickAwayListener onClickAway={handleCloseWidget}>
            <div className={classes.inputAndPaperWrapper}>
              <Typography className={classes.phoneTypography}>Phone</Typography>
              <Paper
                onFocus={handleTextFieldOnFoucs}
                component="form"
                className={classes.paperRoot}
              >
                <Typography className={classes.iconButton} aria-label="menu">
                  {selectedCountry.code}
                </Typography>
                <InputBase
                  className={classes.input}
                  placeholder={PHONE_NUMBER_PLACE_HOLDER}
                  onChange={handleChangePhoneInput}
                />
              </Paper>
              <Grow in={openWidget}>
                <Paper className={classes.inputPaper}>
                  <div className={classes.optionsWrapper}>
                    <ReactCountryFlag
                      className={classes.flag}
                      countryCode={selectedCountry.sub_name}
                      svg
                    />
                    <Typography className={classes.countryNameAndcodeTypo}>
                      {selectedCountry.name} ({selectedCountry.code})
                    </Typography>
                  </div>
                  <InputBase
                    className={classes.serchInput}
                    placeholder={SEARCH_INPUT_PLEACE_HOLDER}
                    onChange={handleOnChangeInput}
                    value={searchTextFieldValue}
                  />

                  {Array.isArray(countriesList) && countriesList.length === 0 ? (
                    <>
                      {shouldShowNoResult && (
                        <Typography className={classes.noResult}>{NO_RESULT}</Typography>
                      )}
                    </>
                  ) : (
                    <>
                      {countriesList.map(country => {
                        return (
                          <div key={country.code + country.name}>
                            <div
                              onClick={() => handleSetSelectedCountry(country)}
                              className={classes.option}
                            >
                              <ReactCountryFlag
                                className={classes.flag}
                                countryCode={country.sub_name}
                                svg
                              />
                              <Typography className={classes.countryNameAndcodeTypo}>
                                {country.name} ({country.code})
                              </Typography>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </Paper>
              </Grow>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneComponent;
