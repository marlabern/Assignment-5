// P5 STUFF

//variables can be used anywhere inside of the init function
	var beta;
	var gamma;
	var xvalue;
	var yvalue;

function setup() {
	createCanvas(900, 1200);

}

function draw() {
	background('whitesmoke');
	// var xvalue= map(gamma, -25, 25, width, height);
	yvalue= map(beta, 30, 90, 0 , 1200); 
	xvalue= map(gamma, -25, 25, 0, 900);
	fill(0);
	ellipse(xvalue, yvalue, 20, 20);
}


function init(){
	

	////ORIENTATION

	//function for orienation
	function handleOrientation(event){
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);

		//send the values to the DOM so we can actually see what they are 
		// document.getElementById('alpha').innerHTML = alpha;
		// document.getElementById('beta').innerHTML = beta;
		// document.getElementById('gamma').innerHTML = gamma;

		socket.emit('orientation',{
			// 'alpha':alpha,
			'beta': beta,
			'gamma': gamma
		});

	}

	//event listener for orientation--- built into js
	window.addEventListener('deviceorientation', handleOrientation, true);

}

window.addEventListener("load", init);





