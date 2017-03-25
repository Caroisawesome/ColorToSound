import React, { Component } from 'react';
import ControlBox from './ControlBox.js';

export default class VideoControls extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    soundCtrls: [{
		color: 'yellow',
		scale: 'cMaj',
		effect: 'distortion'
	    }]
	}
    }

    soundControlRow(controls, index) {
	return <div key={index.toString()}>
	    <ControlBox
	color={controls.color}
	colorChangeHandler={this.colorChangeHandler.bind(this)}
	    />
	</div>
    }

    colorChangeHandler(val) {
	this.setState({ color: val});
    }
    
    render() {
	const controls = this.state.soundCtrls.map((obj, i) => this.soundControlRow.call(this, obj, i))

	return <div>{controls}</div>
    }
}
