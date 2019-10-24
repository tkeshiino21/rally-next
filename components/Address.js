import React, { Component } from 'react'
import Header from './Header'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/styles'

const styles = {
  button:{
      margin: 15
  },
  menuButton: {
      marginLeft: 1000,
  },
  title: {
      flexGrow: 1,
  },
}

export default class Address extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider>
        <Header/>

        <TextField
          required
          id="standard-required"
          label="ID"
          onChange={handleChange('personalNum')}
          defaultValue={values.personalNum}
          margin="normal"
        />
        <br/>
        <TextField
          required
          id="standard-required"
          label="お名前"
          onChange={handleChange('personalName')}
          defaultValue={values.personalName}
          margin="normal"
        />
        <br/>
        <TextField
          required
          id="standard-required"
          label="郵便番号"
          defaultValue={values.addressNum}
          onChange={handleChange('addressNum')}
          margin="normal"
        />
        <br/>
        <TextField
          required
          id="standard-required"
          label="住所1"
          defaultValue={values.address1}
          onChange={handleChange('address1')}
          margin="normal"
        />
        <br/>
        <TextField
          required
          id="standard-required"
          label="住所2"
          defaultValue={values.address2}
          onChange={handleChange('address2')}
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-name"
          label="住所3"
          defaultValue={values.address3}
          onChange={handleChange('address3')}
          margin="normal"
        />
        <br/>

        <Button variant="contained" color="primary"
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        >次へ</Button>
      </ThemeProvider>
    );
  }
}