import React, { Component, Fragment } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }

  render() {
    return (
      <ThemeProvider>
        <Fragment>
          <AppBar />
            <h1>ご提出ありがとうございました。</h1>
          <Button
            label="Continue"
            primary={true}
          />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;