import React, { Component } from 'react'
import Header from './Header'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles'
import Container from '@material-ui/core/Container';

const styles = {
  button:{
      margin: 15
  },
  container: {
    justifyContent: 'spaceAround',
  }
}

export default  class HouseConfirm extends Component {
  continue = e => {
  e.preventDefault();
  this.props.nextStep();
  };

  render() {
  const { values: { 
    personalNum, 
    personalName, 
    addressNum, 
    address1,
    address2,
    address3,
    method} } = this.props;

  return (
      <ThemeProvider>
      <Header />
      
      <Container>
      <List>
        <ListItem button>
          <ListItemText 
          primary="ID"
          secondary={personalNum}/>
        </ListItem>
        <ListItem button>
          <ListItemText 
          primary="お名前" 
          secondary={personalName}/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText
          primary="郵便番号"
          secondary={addressNum}/>
        </ListItem>
        <ListItem button>
          <ListItemText
          primary="住所1"
          secondary={address1}/>
        </ListItem>
        <ListItem button>
          <ListItemText
          primary="住所2"
          secondary={address2}/>
        </ListItem>
        <ListItem button>
          <ListItemText
          primary="住所3"
          secondary={address3}/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText
          primary="通勤方法"
          secondary={method}/>
        </ListItem>
      </List>
      </Container>
      <br/>

      <Button variant="contained" color="primary"
        label="Continue"
        style={styles.button}
        onClick={this.continue}
      >次へ</Button>
    </ThemeProvider>
  );
  }
  }