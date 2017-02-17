function initNoiseMaker() {
    
    var synth = new Tone.AMSynth().toMaster()

    $('button').on('click', function(event) {
	console.log('event', event);

	//play a middle 'C' for the duration of an 8th note
	synth.triggerAttackRelease('C4', '8n')
    });
}

function initVideoTracker() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);

    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', function(event) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	event.data.forEach(function(rect) {
	    context.strokeStyle = rect.color;
	    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
    });
}


window.onload = function() {
    initVideoTracker();
    initNoiseMaker();
};
