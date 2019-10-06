import React, { useCallback } from "react";
import debounce from "lodash/debounce";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles, Box } from "@material-ui/core";
import styles from "./Search.component.style";
import SearchListComponent from "./SearchList.component";
import { compose } from "redux";
import history from "../../history";
import Button from "@material-ui/core/Button";

const SearchComponent = props => {
  const {
    onSearch,
    planets,
    classes,
    isMaxSearchExeeded,
    isLoggedIn,
    onLogoutUser,
    currentUser
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

export default compose(withStyles(styles)(SearchComponent));
