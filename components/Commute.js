import React, { Component } from 'react'
import Header from './Header'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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

export default class Commute extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;
    
    return (
    <ThemeProvider>
      <Header />

      {/* ラジオボタン */}
      <FormControl component="fieldset">
        <FormLabel component="legend">通勤方法</FormLabel>
        <RadioGroup
            aria-label="通勤方法"
            name="Method"
            onChange={handleChange}>
          <FormControlLabel 
            value="電車"
            control={<Radio />}
            onChange={handleChange('method')}
            label="電車通勤" />
          <FormControlLabel
            value="自家用車"
            control={<Radio />}
            onChange={handleChange('method')}
            label="自家用車通勤" />
          <FormControlLabel
              value="自転車"
              control={<Radio />}
              onChange={handleChange('method')}
              label="自転車通勤" />
          <FormControlLabel
              value="徒歩"
              control={<Radio />}
              onChange={handleChange('method')}
              label="徒歩通勤" />
        </RadioGroup>
      </FormControl>
      <br/>
      <Button variant="contained" color="primary"
        label="Continue"
        style={styles.button}
        onClick={this.continue}>
        次へ</Button>
    </ThemeProvider>
    );
  }
}