import React, { Component } from 'react';
import Select from 'react-select';
import OPTIONS from './controlOptions.js';

export default class ControlBox extends Component {
    constructor(props) {
	super(props);
    }

    getOptions(field) {
	const fieldOptions = OPTIONS()[field];
	return Object.keys(fieldOptions).map( key => fieldOptions[key] );
    }

    render() {
	const changeHandler = this.props.controls.changeHandler;
	const selects = [];
	const self = this;
	
	Object.keys(this.props.controls).forEach( key => {

	    if (key !== "changeHandler") {
		selects.push(

			<Select
		    key={key}
		    name={`${key}-field`}
		    value={self.props.controls[key]}
		    options={self.getOptions(key)}
		    onChange={val => changeHandler(key, val)}/>

		)
	    }
	});

	return <div>{selects}</div>;
    }
}

