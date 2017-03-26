import React, { Component } from 'react';

export default class VidPlaceholder extends Component {

    constructor(props) {
	super(props);
	
	this.style = {
	    width: "100%",
	    backgroundColor: '#ccc',
	    height: "300px"
	};
    }

    render() {
	return(
		<div style={ this.style }>
		<button className="btn btn-info" onClick={this.props.clickHandler}>Start Tracking</button>
		</div>
	)
    }
}
