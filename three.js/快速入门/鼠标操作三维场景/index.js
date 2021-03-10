/* 
 * 创建场景对象Scene
 */
const scene = new THREE.Scene();

/* 
 * 创建网格模型
 */
const geometry = new THREE.BoxGeometry(100, 100, 100); // 创建一个几何模型 BoxGeometry -- 立方体几何模型
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
}); // 创建材质对象
const mesh = new THREE.Mesh(geometry, material); // 将几何体与材质整合到网格模型中
scene.add(mesh); // 将网格模型添加到场景中

/* 
 * 光源设置
 */
// 点光源
const point = new THREE.PointLight(0x00ffff);
point.position.set(400, 200, 300);
scene.add(point); // 将光源添加到场景中

// 环境光
const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);

/* 
 * 相机设置
 */
const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height; // 窗口宽高比
const s = 200;

// 创建相机对象
const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); // 设置相机位置
camera.lookAt(scene.position); // 视角

/* 
 * 创建渲染器
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
document.body.appendChild(renderer.domElement); // 插入到dom中
var axisHelper = new THREE.AxisHelper(250);
scene.add(axisHelper);
// 执行渲染操作
let T0 = new Date();
function render() {
    let T1 = new Date();
    let t = T1 - T0;
    T0 = T1;
    // requestAnimationFrame(render);
    renderer.render(scene, camera);
    // mesh.rotateY(0.001 * t);
}

render();

// 相机控制插件 通过监听鼠标和键盘来更新相机参数
const controls = new THREE.OrbitControls(camera, renderer.domElement);


// ! addEventListener 和 requestAnimationFrame不要同时使用
controls.addEventListener('change', render);
