import React, { useState, memo, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import history from "../../history";
import Grid from "@material-ui/core/Grid";
import { withStyles, Box } from "@material-ui/core";
import styles from "./login.style";
import isEmpty from "lodash/isEmpty";

const LoginComponent = props => {
  const [state, setState] = useState({ userName: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(false);

  const { isLoggedInError, onValidateUser, isLoggedIn, classes } = props;
  const { userName, password } = state;
  const handleChange = (value, fieldName) => {
    setState({ ...state, [fieldName]: value });
  };

  const onSubmit = async () => {
    if (!userName || !password) {
      setErrorMessage("username and password is requried");
      return;
    }

    await onValidateUser(state);
  };

  return (
    <>
      <Grid container className={classes.parent}>
        <Grid item xs={12} md={7}>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            id="user-name"
            label="username"
            className={classes.textField}
            error={!state.userName && errorMessage}
            value={userName}
            onChange={e => handleChange(e.target.value, "userName")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            type="password"
            id="password"
            label="password"
            className={classes.textField}
            error={!state.password && errorMessage}
            value={password}
            onChange={e => handleChange(e.target.value, "password")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="caption" style={{ color: "red" }}>
            {isLoggedInError
              ? "username or password is incorrect"
              : errorMessage}
          </Typography>
        </Grid>
        {isLoggedIn && history.push("/search")}
        <Grid item xs={12} md={7}>
          <Box pt={2}>
            <Button
              disabled={isEmpty(state.userName) || isEmpty(state.password)}
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(withStyles(styles)(LoginComponent));
