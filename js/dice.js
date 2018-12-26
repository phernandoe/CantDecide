//Creating scene & camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color(0x000000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

//Grabbing words from input
var searchParams = new URLSearchParams(window.location.search);
var words = searchParams.get("words");
var faces = words.split(" ");

for (i = 0; i < 6; i++){
    if (i >= faces.length){
        faces.push("Nada?");
    }
}

//Creating textures
var texturesArray = [];

function createFaces(){
    for (i = 0; i < faces.length; i++){
        var texture = document.createElement("canvas");
        var textureContext = texture.getContext("2d");
        texture.width = texture.height = 128;
        textureContext.fillStyle = "white";
        textureContext.font = "15pt Courier New";
        textureContext.textAlign = "center";
        textureContext.textBaseline = "middle";
        textureContext.fillText(faces[i], 64, 64);
        texturesArray.push(texture);
    }
}


//Creating cube
var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
createFaces();
var materials = []

for (i = 0; i < 6; i++) {
    materials.push(new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(texturesArray[i]), transparent: false }));
}

var cube = new THREE.Mesh(geometry, materials);

scene.add(cube);
cube.position.set(0,5,0);

//Rotation set up
var perfectRotation = 1.55;
var secretNumber = 1.684850176042474e-16;
var restingPos = Math.floor(Math.random() * 10) * perfectRotation;

if ((Math.random() * 50) > 25){
    cube.rotation.x = restingPos + secretNumber;
    cube.rotation.y = secretNumber;
} else {
    cube.rotation.y = restingPos + secretNumber;
    cube.rotation.x = secretNumber;
}

camera.position.z = 5;

//Render loop
function theLoop(){
    requestAnimationFrame(theLoop);
    animate();
}

var speed = 0.10;

function animate() {

    var hasFallen = false;
    var targetY = 0;
    var interval = 0.0008;

    if (!hasFallen){
        if (Math.floor(cube.position.y) != targetY){
            cube.position.y -= 0.07;
            renderer.render(scene,camera);
        } else {
            hasFallen = true;
        }
    }

    if (speed > 0){
        cube.rotation.x += speed;
        cube.rotation.y += speed;
        renderer.render(scene,camera);
        speed -= interval;
    } 
    
}

theLoop();