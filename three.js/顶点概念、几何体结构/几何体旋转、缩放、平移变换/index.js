const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200;

const scene = new THREE.Scene();

const axes = new THREE.AxesHelper(200);
scene.add(axes);

const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(100, 100, 100);
camera.lookAt(scene.position);

const light = new THREE.PointLight(0xffffff);
light.position.set(200, 100, 100);
scene.add(light);

const ambitLight = new THREE.AmbientLight(0x444444);
scene.add(ambitLight);


const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
});
geometry.scale(0.5, 1, 1);
// geometry.translate(50, 0, 0);
geometry.rotateX(Math.PI / 3);
// geometry.center();
const mesh = new THREE.Mesh(geometry, material);
// mesh.scale.set(0.5, 1, 1)
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1);
const dom = renderer.domElement;
document.body.appendChild(dom);

 
function render() {
    renderer.render(scene, camera);
};
render();