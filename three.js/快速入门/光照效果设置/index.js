const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200;

const lightPosition = [100, 100, 100];

const scene = new THREE.Scene();

const axis = new THREE.AxisHelper(250);
scene.add(axis);

const camera = new THREE.PerspectiveCamera(75, k, 1, 1000);
camera.position.set(200, 300, 200);
camera.lookAt(scene.position);

const point = new THREE.PointLight(0xffffff);
point.position.set(...lightPosition);
scene.add(point);

const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);


const lightGemoetry = new THREE.SphereGeometry(10, 10, 10);
const lightMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff
});
const light = new THREE.Mesh(lightGemoetry, lightMaterial);
light.position.set(...lightPosition);
scene.add(light);

const gemoetry = new THREE.SphereGeometry(60, 40, 40);
const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff,
    specular: 0x4488ee,
    shininess: 12
});
const mesh = new THREE.Mesh(gemoetry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1);
const dom = renderer.domElement;
document.body.appendChild(dom);

let degree = 0;
function render() {
    const d = (++degree * Math.PI) / 180;
    const x = Math.cos(d) * 200;
    const y = Math.sin(d) * 200;
    light.position.set(x, y, y);
    point.position.set(x, y, y);
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();

const controls = new THREE.OrbitControls(camera, dom);
// controls.addEventListener('change', render);
