import React, { Component } from 'react';
import App from './App';
import VidPlaceholder from './VidPlaceholder';

export default class MainContainer extends Component {
    constructor(props) {
	super(props)
	
	this.state = {
	    tracking: false,
	}
    }

    getVideoSection() {
	return this.state.tracking ?
	    <App /> : <VidPlaceholder clickHandler={this.toggleTracking.bind(this)} />
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
		</div>
	    </div>
	    </div>
	)
    }
}
