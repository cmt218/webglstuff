var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor (0xffffff, 1);
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera );

var spinner = null;

var objectLoader = new THREE.ObjectLoader();
objectLoader.setCrossOrigin("");
objectLoader.load("assets/FidgetSpinner.json", function ( obj ) {
spinner = obj;
spinner.rotation.x += 0.5;
scene.add( obj );
} );


camera.position.z = 5;
controls.autoRotate = true;
controls.rotateSpeed = 2.0;



function animate() {
	requestAnimationFrame( animate );
	if(spinner)
	{
		spinner.rotation.y += spinspeed;


		controls.update();

  		renderer.render( scene, camera );
	}
	renderer.render( scene, camera );
}


animate();

var spinspeed = 0.05;

function increasespeed(){
	spinspeed+=0.05;
}
function decreasespeed(){
	spinspeed-=0.05;
}