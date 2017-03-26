import React, { Component } from 'react';
import ControlBox from './ControlBox.js';

export default class VideoControls extends Component {
    constructor(props) {
	super(props);
    }

    soundControlRow(controls, index) {
	return <div key={index.toString()}>
	    <ControlBox controls={controls}/>
	</div>
    }
    
    render() {
	const controls = this.props.controls.map((obj, i) => this.soundControlRow.call(this, obj, i))

	return <div>{controls}</div>
    }
}
