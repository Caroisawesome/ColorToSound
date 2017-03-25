import React, { Component } from 'react';
import Select from 'react-select';
import OPTIONS from './controlOptions';

export default class ControlBox extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    colorValue: this.props.color
	}
	
	this.colorChangeHandler = () => {};
    }

    getColorOptions() {
	return Object.keys(OPTIONS.color).map( key => {
	    return OPTIONS.color[key];
	});
    }

    render() {
	return (
		<div>

	    <Select
	name="color-field"
	value="yellow"
	    options={this.getColorOptions()}
	    onChange={this.props.colorChangeHandler}/>

	    <Select name="" />
	    </div>
	)
    }
}

