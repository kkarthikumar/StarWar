import React, { useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles, Box } from "@material-ui/core";
import styles from "./Search.component.style";
import SearchListComponent from "./SearchList.component";
import { compose } from "redux";
import Button from "@material-ui/core/Button";

const SearchComponent = props => {
  const {
    onSearch,
    planets,
    classes,
    isMaxSearchExeeded,
    isLoggedIn,
    onLogoutUser,
    currentUser,
    history
  } = props;

  const debounceOnChange = useCallback(debounce(onSearch, 400), []);

  const onLogoutClick = () => {
    onLogoutUser();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={7}>
          <TextField
            id="searchPlanet"
            label="Search Planet"
            className={classes.searchField}
            onChange={e => {
              isMaxSearchExeeded
                ? alert("Maximum 15 searches can do for a minute")
                : debounceOnChange(e.target.value, currentUser);
            }}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={5} alignContent="right">
          <Box pt={2}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={onLogoutClick}
            >
              Logout
            </Button>
          </Box>
        </Grid>
      </Grid>
      {!isLoggedIn && history.push("/")}
      <SearchListComponent planets={planets} />
    </>
  );
};

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
  planets: PropTypes.array,
  classes: PropTypes.object,
  isMaxSearchExeeded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogoutUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  history: PropTypes.func.isRequired
};

export default compose(withStyles(styles)(SearchComponent));
