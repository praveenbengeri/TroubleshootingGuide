import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
          >
            <AppBar title="Confirm details " /><h2>Summary</h2>
            <List>
            <ListItem >
            <ListItemIcon>
              <Checkbox
                checked="true"
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`Is your Office updated to the latest version as the issue may have been addressed in latest patches?
Please navigate to Office app -? File -> About -> to get information of the Office version installed in you`} />
            </ListItem>
            <ListItem >
            <ListItemIcon>
              <Checkbox
                checked="true"
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`Hardware plays a critical role in this context – so is the RAM, disk type and CPU speed same for the machines (Office 2010 versus Office 2016 for instance) you are comparing the performance?`} />
            </ListItem>
            <ListItem >
            <ListItemIcon>
              <Checkbox
                checked=""
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`We shouldn't be comparing any Physical machine to a Virtual machine.`} />
            </ListItem>
            <ListItem >
            <ListItemIcon>
              <Checkbox
                checked="true"
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`
Have you Checked the “Disable hardware graphics acceleration” check box under File-> Options -> Advanced -> Display section`} />
            </ListItem>
            <ListItem >
            <ListItemIcon>
              <Checkbox
                checked=""
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`Please uncheck “Animate controls and elements inside windows” check box under System -> Advanced System Settings -> Advanced -> Performance Options -> Settings`} />
            </ListItem>
            <ListItem button >
            <ListItemIcon>
              <Checkbox
                checked="false"
                tabIndex={-1}
                
              />
            </ListItemIcon>
            <ListItemText  primary={`
Does your scenario include - your macro executing several individual copy and paste operation and it takes longer than expected to complete the copy and paste operation? `} />
            </ListItem>
            </List>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
