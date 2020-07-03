import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CheckIcon from '@material-ui/icons/Check'
import StopIcon from '@material-ui/icons/Stop'
export class Screen1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog 
            open
            fullWidth
            maxWidth='md'
          >
             <DialogTitle id="form-dialog-title"> Office applications - Performance Issue </DialogTitle>
        <DialogContent>
        <p  style={{float: 'right'}}>Page1/2</p>
          <DialogContentText>
          <List component="nav" aria-label="main mailbox folders">
          <ListItem >
          <ListItemIcon>
              <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="Is your Office updated to the latest version as the issue may have been addressed in latest patches?
Please navigate to Office app -? File -> About -> to get information of the Office version installed in you
"/> <ListItemText secondary="Click to read more, to understand the update history for Microsoft 365 Apps ">
<a href="https://docs.microsoft.com/en-us/officeupdates/update-history-microsoft365-apps-by-date">Documentation</a></ListItemText>
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="Hardware plays a critical role in this context – so is the RAM, disk type and CPU speed same for the machines (Office 2010 versus Office 2016 for instance) you are comparing the performance?" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="We shouldn't be comparing any Physical machine to a Virtual machine." />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="Have you Checked the “Disable hardware graphics acceleration” check box under File-> Options -> Advanced -> Display section" />
        </ListItem>


      </List>
          </DialogContentText>
          </DialogContent>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Next</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Screen1;
