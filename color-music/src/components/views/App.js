import React, { Component } from 'react';
import ColorNoiseMaker from './../ColorTrackerClass.js';

class App extends Component {

    constructor(props) {
	super(props);
	this.state = {
	    videoId: "colorTrackerVideo",
	    canvasId: "colorTrackerCanvas",
	    videoWidth: 600,
	    videoHeight: 450
	}
    }

    componentDidMount() {
	this.noiseMaker = new ColorNoiseMaker(this.state.videoId, this.state.canvasId, this.props.controls);
    }
    
  render() {
    return (
      <div>
	    <video id={this.state.videoId}
	width={this.state.videoWidth} height={this.state.videoHeight} preload autoPlay loop muted controls></video>
	    <canvas id={this.state.canvasId} width={this.state.videoWidth} height={this.state.videoHeight}></canvas>
      </div>
    );
  }
};

export default App;
