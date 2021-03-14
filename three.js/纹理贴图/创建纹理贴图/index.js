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
scene.add(directionalLight);
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 30);
scene.add(directionalLightHelper);

const ambient = new THREE.AmbientLight({
    color: 0x444444
});
scene.add(ambient);

// const geometry = new THREE.PlaneGeometry(300, 200);
// const geometry = new THREE.BoxGeometry(100, 100, 100);
const geometry = new THREE.SphereGeometry(60, 25, 25); //球体

// 创建纹理加载器对象
const textureLoader = new THREE.TextureLoader();
textureLoader.load('../../../images/910131.jpg', (texture) => {
    const materila = new THREE.MeshLambertMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, materila);
     
    scene.add(mesh);
    render();
});



const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff);
document.body.appendChild(renderer.domElement);

function render() {
    renderer.render(scene, camera);
}

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

