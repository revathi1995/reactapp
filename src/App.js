import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import FaceRecognition from './views/faceRecognition';
import CameraFaceDetect from './views/cameraFaceDetect';
import Home from './views/Home';
import Header from './components/Header';
import './App.css';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className="route">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={FaceRecognition} />
            <Route exact path="/camera" component={CameraFaceDetect} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
