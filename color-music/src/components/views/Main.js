import React, { Component } from 'react';
import App from './App';
import VidPlaceholder from './VidPlaceholder';
import VideoControls from './VideoControls.js';

export default class MainContainer extends Component {
    constructor(props) {
	super(props)

	const self = this;
	this.state = {
	    tracking: false,
	    controls: [{
		color: 'yellow',
		scale: 'cMaj',
		effect: 'distortion',
		changeHandler: (field, value) => {
		    self.changeHandler.call(self, 0, field, value);
		}
	    }]
	}
    }

    changeHandler(index, field, value) {
	const controls = this.state.controls;
	controls[index][field] = value;
	this.setState({ controls });
    }

    getVideoSection() {
	return this.state.tracking ? <App /> : <VidPlaceholder clickHandler={this.toggleTracking.bind(this)} />
    }

    toggleTracking() {
	const tracking = this.state.tracking;
	this.setState({ tracking: !tracking });
    }

    render() {
	return (
		<div className="container">
		<div className="row">
		<div className="col-md-6">
		{ this.getVideoSection() }
		</div>
		<div className="col-md-6">
		<VideoControls controls={this.state.controls}/>
		</div>
	    </div>
	    </div>
	)
    }
}
