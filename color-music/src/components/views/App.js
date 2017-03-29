import React, { Component } from 'react';
import ColorNoiseMaker from './../ColorTrackerClass.js';
import OPTIONS from './../controlOptions';

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
	this.trackers = this.props.controls.map(control => {
	    const settings = {
		color: OPTIONS().color[control.color].value,
		effect: OPTIONS().effect[control.effect].value,
		scale: OPTIONS().scale[control.scale].value
	    }
			
	    return new ColorNoiseMaker(this.state.videoId, this.state.canvasId, settings);
	});
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
