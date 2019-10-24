import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  title: {
    flexGrow: 1,
    textAlign: 'Left',
  },
  menuButton: {
    marginRight: 20,
  }
};

export default class Header extends Component {
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" style={styles.title}>
          諸届け申請システム
        </Typography>
        <Button color="inherit" style={styles.menuButton}>Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}