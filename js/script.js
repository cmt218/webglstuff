var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor (0xffffff, 1);
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
var objectLoader = new THREE.ObjectLoader();
var spinner = null;
objectLoader.setCrossOrigin("");
objectLoader.load("assets/FidgetSpinner.json", function ( obj ) {
spinner = obj;
spinner.rotation.x += 0.5;
scene.add( obj );
} );


camera.position.z = 5;
var spinspeed = 0.05;

function increasespeed(){
	spinspeed+=0.05;
}
function decreasespeed(){
	spinspeed-=0.05;
}

function animate() {
	requestAnimationFrame( animate );
	if(spinner)
	{
		// spinner.rotation.x += 0.1;
		spinner.rotation.y += spinspeed;
	}
	renderer.render( scene, camera );
}


animate();