import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CheckIcon from '@material-ui/icons/Check';
import StopIcon from '@material-ui/icons/Stop';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
export class Screen2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
        <p  style={{float: 'right'}}>Page2/2</p>
          <DialogContentText>
          <List component="nav" aria-label="main mailbox folders">
          <ListItem >
          <ListItemIcon>
          <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="Please uncheck “Animate controls and elements inside windows” check box under System -> Advanced System Settings -> Advanced -> Performance Options -> Settings
"/> <ListItemText ></ListItemText>
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <Checkbox/>
            </ListItemIcon>
          <ListItemText primary="Does your scenario include - your macro executing several individual copy and paste operation and it takes longer than expected to complete the copy and paste operation? " />
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

export default Screen2;
