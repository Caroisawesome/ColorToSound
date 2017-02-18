class ColorNoiseMaker {
    constructor() {

	this.makeNoise = true;
	this.colors = ['magenta', 'cyan', 'yellow'];
	this.videoId = '#video';
	var canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
	this.colorTracker = new tracking.ColorTracker(this.colors);
	this.polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	this.distortion = new Tone.Distortion().toMaster();
	
	this.CScale = ["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"];
	
	this.initTracking();
    }

    initTracking() {
	const self = this;
	
	tracking.track(this.videoId, this.colorTracker, { camera: true });
	this.colorTracker.on('track', function(event) {
	    self.context.clearRect(0, 0, canvas.width, canvas.height);
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
    }

    toggleNoise() {
	this.makeNoise = !this.makeNoise;
    }
}




window.onload = function() {
    const NoiseMaker = new ColorNoiseMaker();

    $('button').on('click', function(e) {
	NoiseMaker.toggleNoise();
    });
};
