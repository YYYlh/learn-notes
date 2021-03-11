const width = window.innerWidth;
const heigth = window.innerHeight;
const k = width / heigth;
const s = 200;

const scene = new THREE.Scene();

const axes = new THREE.AxesHelper(200);
scene.add(axes);

const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(100, 100, 100);
camera.lookAt(scene.position);

const point = new THREE.PointLight(0xffffff);
point.position.set(200, 200, 200);
scene.add(point);

const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);

/*  
 * 创建几何体 
*/
// 创建一个几何体buffer类对象
const geometryBuffer = new THREE.BufferGeometry();
// 创建顶点数据
const vertices = new Float32Array([
    0, 0, 0,
    50, 0, 0,
    0, 100, 0,
    0, 0, 100, 
    0, 200, 300
]);
// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3);
// 设置几何体attributes属性的位置属性
geometryBuffer.attributes.position = attribue;

// //  使用网格渲染模式
// const material = new THREE.MeshBasicMaterial({
//     color: 0x0000ff
// });
// const mesh = new THREE.Mesh(geometryBuffer, material);

// // 使用点渲染模式
// const material = new THREE.PointsMaterial({
//     color: 0xff0000,
//     size: 10
// });
// const mesh = new THREE.Points(geometryBuffer, material);

// 使用线模型渲染
const material = new THREE.LineBasicMaterial({
    color: 0xff0000
})
const mesh = new THREE.Line(geometryBuffer, material);

// 几何体本质 -- 由多个三角形构成

scene.add(mesh);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, heigth);
renderer.setClearColor(0xb9d3ff, 1);
const dom = renderer.domElement;

document.body.appendChild(dom);

function render() {
    renderer.render(scene, camera);
};

render();