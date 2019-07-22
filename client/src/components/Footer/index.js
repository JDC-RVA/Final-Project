import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    alignContent: "center"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Container component="main" className={classes.main} maxWidth="sm" /> */}
      <footer className={classes.footer}>
        {/* <Container maxWidth="sm"> */}
        {/* <Typography> */}
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />
        <img id="footer" alt="logo" src="/img/revmart-logo_transparent.png" />

        {/* </Typography> */}
        {/* </Container> */}
      </footer>
    </div>
  );
}
