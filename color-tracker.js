window.onload = function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker(['yellow']);

    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', function(event) {
	console.log('event', event);
	context.clearRect(0, 0, canvas.width, canvas.height);
	event.data.forEach(function(rect) {
	    context.strokeStyle = rect.color;
	    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
    });
};
