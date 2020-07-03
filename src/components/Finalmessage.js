import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog 
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h3>Thank You For Your Time</h3>
            <p>Please <a href="#">click here</a> to download the transcript</p>
            <p>You can reach out to MS Support for further assistance</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
