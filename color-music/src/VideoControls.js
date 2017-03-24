import React, { Component } from 'react';
import OPTIONS from './controlOptions';

export default class VideoControls extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    soundCtrls: [{
		color: 'yellow',
		scale: 'cMaj',
		effect: 'distortion'
	    },{
		color: 'magenta',
		scale: 'cMin',
		effect: 'tremolo'
	    }]
	}
    }

    soundControlRow(controls, index) {
	return <p key={index.toString()}>{controls.color}, {controls.effect}, {controls.scale}</p>
    }
    
    render() {
	const controls = this.state.soundCtrls.map( (obj, i) => this.soundControlRow(obj, i))

	return <div>{controls}</div>
    }
}
