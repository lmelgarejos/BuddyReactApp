import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubIcon from './GithubIcon';
import Button from 'react-toolbox/lib/button/Button';

// import hola from './hi.js';

const authorizedUrl = 'https://github.com/login/oauth/authorize';
const clientId = "df907319112f1b903786";
const scope = 'user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">
            Welcome to Buddy. A carpool app.
          </h2>
        </div>
        <p className="App-intro">
          An app to carpool with your awesome coworker.
        </p>
        <div className="Login-buttons">
          <Button
            raised
            accent
            href={`${authorizedUrl}?client_id=${clientId}&scope=${scope}`}
          >
          <GithubIcon />
            {' '}
            Login with GitHub
          </Button>
        </div>

      </div>
    );
  }
}

export default App;
