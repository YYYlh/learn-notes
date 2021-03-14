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

// // 基础线条材质
// const material = new THREE.LineBasicMaterial({
//     color: 0x0000ff
// });
// const mesh = new THREE.Line(geometry, material);

// 虚线材质
const geometryBuffer = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    50, 0, 0,
    0, 100, 0,
]);
geometryBuffer.attributes.position = new THREE.BufferAttribute(vertices, 3);
const material = new THREE.LineDashedMaterial({
    color: 0xff0000,
    dashSize: 10,
    gapSize: 5
})
const mesh = new THREE.Line(geometryBuffer, material);
mesh.computeLineDistances();

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