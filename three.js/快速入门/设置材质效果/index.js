const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200;

const scene = new THREE.Scene();

const axis = new THREE.AxisHelper(250);
scene.add(axis);

const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200);
camera.lookAt(scene.position);

const point = new THREE.PointLight({
    color: 0x00ffff
});
point.position.set(400, 200, 300);
scene.add(point);

// 生成一个正十二面体
const geometry = new THREE.DodecahedronGeometry(50);

// // 基础材料 不受光照影响
// const material = new THREE.MeshBasicMaterial({
//     color: 0x0000ff
// }); 
// // Lambert网格材质，与光照有反应，漫反射
// const material = new THREE.MeshLambertMaterial({
//     color: 0x0000ff,
//     opacity: 0.7,
//     transparent: true,
//     wireframe: true // 渲染成线条
// });
// 高光Phong材质,与光照有反应
const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff,
    specular: 0x4488ee, // 高光颜色
    shininess: 12 // 光照系数强度
});
// // PBR物理材质，相比较高光Phong材质可以更好的模拟金属、玻璃等效果（不会用）
// const material = new THREE.MeshStandardMaterial({
//     color: 0x0000ff
// })

const mesh = new THREE.Mesh(geometry, material);
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

const controls = new THREE.OrbitControls(camera, dom);
controls.addEventListener('change', render);