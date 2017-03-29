/* global tracking */

import $ from 'jquery';
import Tone from 'tone';

class ColorNoiseMaker {
    constructor(videoId, canvasId, settings) {
	this.makeNoise = true;
	this.colors = [settings.color]
	this.videoId ='#'+videoId;
	this.canvas = $('#'+canvasId)[0];
	this.context = this.canvas.getContext('2d');
	this.polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	this.distortion = new Tone[settings.effect]().toMaster();
	this.colorTracker = new tracking.ColorTracker(this.colors);
	
	this.CScale = settings.scale;
	
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

