import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { black } from 'material-ui/styles/colors';
import Grid from '@material-ui/core/Grid';

const BootstrapButton = withStyles({
  root: {
      width:'80%',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#c2c2c2',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#6dd1a7',
      borderColor: '#5ebd95',
      boxShadow: 'none',
      color: 'white'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Body() {
  const classes = useStyles();

  return (
    <div style={{padding:"0 20px 0 20px",transform:"translate(28%,20%)"}}>
    <Grid container spacing={0} direction="column">
      <Grid item xs={6}>
      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
        Register
      </BootstrapButton>
      </Grid>
      <ThemeProvider theme={theme}>
        <Grid item xs={6}> 
        <BootstrapButton variant="contained" color="primary" className={classes.margin}>
          Upload Image
        </BootstrapButton>
        </Grid>
      </ThemeProvider>
      </Grid>
    </div>
  );
}