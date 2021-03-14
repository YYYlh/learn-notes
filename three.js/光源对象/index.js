const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200;

const scene = new THREE.Scene();

const axes = new THREE.AxesHelper(200);
scene.add(axes);

const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0.1, 10000);
camera.position.set(100, 100, 100);
camera.lookAt(scene.position);

// 方向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// 设置光源位置
directionalLight.position.set(100, 100, 100);
// 设置用于计算阴影的光源对象
directionalLight.castShadow = true;
// 设置计算阴影的区域，最好刚好紧密包围在对象周围
// 计算阴影的区域过大：模糊  过小：看不到或显示不完整
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 300;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 200;
directionalLight.shadow.camera.bottom = -100;
scene.add(directionalLight);
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 30);
scene.add(directionalLightHelper);

const ambient = new THREE.AmbientLight({
    color: 0x444444
});
// scene.add(ambient);

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.castShadow = true;

const planeGeometry = new THREE.PlaneGeometry(300, 200);
const planeMaterila = new THREE.MeshLambertMaterial({
    color: 0x999999
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterila);
planeMesh.rotateX(-Math.PI / 2);
planeMesh.position.set(0, -50, 0);
planeMesh.receiveShadow = true;
scene.add(planeMesh);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

function render() {
    renderer.render(scene, camera);
}

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

render();