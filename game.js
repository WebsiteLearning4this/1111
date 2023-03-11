const canvas = document.getElementById("gameCanvas");

// Create a renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.width, canvas.height);

// Create a camera and add it to the scene
const fov = 75;
const aspect = canvas.width / canvas.height;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a scene and add the camera and cube to it
const scene = new THREE.Scene();
scene.add(camera);
scene.add(cube);

// Render the scene
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();
