import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { startLogin } from "../../actions/userAction";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const Heading = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => props.fontSize}px;
  line-height: 88px;
  /* identical to box height */

  letter-spacing: -1.5px;

  color: #ffffff;

  mix-blend-mode: normal;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn(props) {
  const classes = useStyles();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const redirect = () => props.history.push("/notes");
    const formData = { email, password };
    props.dispatch(startLogin(formData, redirect));
  };
  if (localStorage.getItem("authToken")) {
    return <Redirect to="/notes" />;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Heading fontSize={56}> Welcome to notes only</Heading>
        <Heading fontSize={24}>your notes taking companion</Heading>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ImportContactsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in - Notes Only
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              value={email}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={password}
              required
              fullWidth
              name="password"
              label="Password"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default connect()(SignIn);
