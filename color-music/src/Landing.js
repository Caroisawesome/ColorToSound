import React, { Component } from 'react';
import App from './App.js';

class LandingPage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    startText: "Start",
	    vidCaputre: false
	}
    }

    componentDidMount() {
	/*
	var addScript = document.createElement('script');
	addScript.setAttribute('src', '../lib/.js');
	document.body.appendChild(addScript);
*/
    }

    
    startVideoCapture() {
	const vidCapture = this.state.vidCapture;
	const startText = vidCapture ? "Stop" : "Start";
	this.setState({vidCapture: !vidCapture, startText });
    }
    
    render() {
	return (

	<div className="container">
	   <button className="btn btn-info" onClick={this.startVideoCapture.bind(this)}>
		{this.state.startText} Tracking
	   </button>
		
	</div>
	)
    }
};

export default LandingPage;
