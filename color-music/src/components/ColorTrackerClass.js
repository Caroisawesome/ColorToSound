/* global tracking */

import $ from 'jquery';
import Tone from 'tone';

class ColorNoiseMaker {
    constructor(videoId, canvasId, controls) {
	this.makeNoise = true;
	this.colors = ['magenta', 'cyan', 'yellow'];
	this.videoId ='#'+videoId;
	this.canvas = $('#'+canvasId)[0];
	this.context = this.canvas.getContext('2d');
	this.polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	this.distortion = new Tone.Distortion().toMaster();
	this.colorTracker = new tracking.ColorTracker(this.colors);
	
	this.CScale = ["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"];
	
	this.initTracking();
    }
    initTracking() {
	const self = this;

	this.colorTracker.on('track', function(event) {
	    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
	    event.data.forEach(function(rect) {

		if (self.makeNoise) {

		    // calcluate distortion levels and add distortion to output
		    const distortionLevel = parseFloat(rect.y)/parseFloat(450);
		    self.distortion.wet.value = 1.0 - distortionLevel;
		    self.polySynth.connect(self.distortion);
		    const soundIndex = parseInt(rect.x) % 40;

		    // play
		    self.polySynth.triggerAttackRelease([self.CScale[soundIndex], self.CScale[soundIndex+2]], "2n");
		}
		
		self.context.strokeStyle = rect.color;
		self.context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            });
	});

	tracking.track(this.videoId, this.colorTracker, { camera: true });
    }

    toggleNoise() {
	this.makeNoise = !this.makeNoise;
    }
}



export default ColorNoiseMaker

