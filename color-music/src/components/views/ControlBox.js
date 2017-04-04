import React, { Component } from 'react';
import Select from 'react-select';
import OPTIONS from './../controlOptions';

export default class ControlBox extends Component {
    constructor(props) {
	super(props);
    }

    getOptions(field) {
	const fieldOptions = OPTIONS()[field];
	return Object.keys(fieldOptions).map( key => {
	    return { value: key, label:fieldOptions[key].label};
	});
    }

    render() {
	const changeHandler = this.props.controls.changeHandler;
	const selects = [];
	
	Object.keys(this.props.controls).forEach( key => {

	    if (key !== "changeHandler") {
		selects.push(

			<Select
		    key={key}
		    name={`${key}-field`}
		    value={this.props.controls[key]}
		    options={this.getOptions(key)}
		    onChange={val => changeHandler(key, val)}/>

		)
	    }
	});

	return <div>{selects}</div>;
    }
}

