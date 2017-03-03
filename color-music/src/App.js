import React, { Component } from 'react';
import ColorNoiseMaker from './ColorTrackerClass.js';

class App extends Component {

    contstructor(props) {
	this.videoId = "colorTrackerVideo";
	this.canvasId = "colorTrackerCanvas";
	this.videoWidth = 600;
	this.videoHeight = 450;
    }

    componentDidMount() {
	this.noiseMaker = new ColorNoiseMaker(this.videoId, this.canvasId);
    }
    
  render() {
    return (
      <div>
	    <video id={this.videoId} width={this.videoWidth} height={this.videoHeight} preload autoPlay loop muted controls></video>
	    <canvas id="colorTrackerCanvas" width={this.videoWidth} height={this.videoHeight}></canvas>
      </div>
    );
  }
}

export default App;
