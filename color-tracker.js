class ColorNoiseMaker {
    constructor() {

	this.makeNoise = true;
	this.colors = ['magenta', 'cyan', 'yellow'];
	this.videoId = '#video';
	var canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
	this.colorTracker = new tracking.ColorTracker(this.colors);
	this.polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

	this.initTracking();
    }

    initTracking() {
	const self = this;
	
	tracking.track(this.videoId, this.colorTracker, { camera: true });
	this.colorTracker.on('track', function(event) {
	    self.context.clearRect(0, 0, canvas.width, canvas.height);
	    event.data.forEach(function(rect) {

		if (self.makeNoise) {		    
		    //play a chord
		    self.polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "2n");
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
	console.log('eeeee', e);
	NoiseMaker.toggleNoise();
    });
};
