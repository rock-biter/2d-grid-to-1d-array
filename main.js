import Grid2DManager from './GridManager'
import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// const n = 8000
// const rows = n
// const cols = n

// const gridMultiArray = []
// const resultsMulti = []

// function multi() {
// 	for (let i = 0; i < cols; i++) {
// 		gridMultiArray[i] = []
// 		for (let j = 0; j < rows; j++) {
// 			gridMultiArray[i][j] = 0
// 		}
// 	}
// }

// function getFromMulti(col, row) {
// 	return gridMultiArray[col][row]
// }

// multi()
// executeMulti(multi, 10, 'media loop 2D')

// const gridMonoArray = []
// const resultsMono = []
// const t = cols * rows

// function mono() {
// 	for (let i = 0; i < t; i++) {
// 		gridMonoArray[i] = 0
// 	}
// }

// function getFromMono(col, row) {
// 	const index = col + row * col

// 	return gridMonoArray[index]
// }

// mono()
// executeMulti(mono, 10, 'media loop 1D')

// function execute(fn = () => {}, text = '', log = false) {
// 	const date = Date.now()

// 	fn()

// 	const newDate = Date.now()
// 	const totalTime = (newDate - date) / 1000
// 	log ? console.log(text, totalTime) : null

// 	return totalTime
// }

// function executeMulti(fn = () => {}, n = 10, text) {
// 	const res = []

// 	for (let k = 0; k < n; k++) {
// 		const r = execute(fn)

// 		res.push(r)
// 	}

// 	console.log(text, res.reduce((a, b) => a + b, 0) / res.length)
// }

// executeMulti(
// 	() => {
// 		getFromMulti(1500, 263)
// 	},
// 	10,
// 	'media get from 2D'
// )

// executeMulti(
// 	() => {
// 		getFromMono(1500, 263)
// 	},
// 	10,
// 	'media get from 1D'
// )

const grid = new Grid2DManager(2, 2)

// console.log(grid)
for (let i = 0; i < grid.count; i++) {
	grid[i] = i + 1
}
console.log(grid)
console.log(grid.get(grid.getIndexFromCoords(0.8, 1.2)))
console.log(grid.get(2))
console.log(grid.get(1, 1))

grid.set(10, 1.2, 0.5)
console.log(grid)

/**
 * 2D
 */

const grid2 = new Grid2DManager(2, 2, 2)
for (let i = 0; i < grid2.length; i++) {
	grid2[i] = i + 1
}

console.log(grid2)
console.log(grid2.get(1, 0))

grid2.setY(5, 1, 1)
console.log('new value', grid2.get(1, 1))

grid2.set([10, 11], 1, 1)
console.log(grid2)
console.log(grid2.get(1, 1))

/**
 * 3D
 */

const grid3 = new Grid2DManager(4, 4, 3)
for (let i = 0; i < grid3.count; i++) {
	const n = i * 3
	grid3.set([n, n + 1, n + 2], i)
}

// /**
//  * Scene
//  */
// const scene = new THREE.Scene()

// /**
//  * Manhattan
//  */
// const material = new THREE.MeshNormalMaterial()
// const geometry = new THREE.BoxGeometry(1, 1, 1)

// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// /**
//  * render sizes
//  */
// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// }
// /**
//  * Camera
//  */
// const fov = 60
// const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.1)
// camera.position.set(4, 4, 4)
// camera.lookAt(new THREE.Vector3(0, 2.5, 0))

// /**
//  * Show the axes of coordinates system
//  */
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

// /**
//  * renderer
//  */
// const renderer = new THREE.WebGLRenderer({
// 	antialias: window.devicePixelRatio < 2,
// 	logarithmicDepthBuffer: true,
// })
// document.body.appendChild(renderer.domElement)
// handleResize()

// /**
//  * OrbitControls
//  */
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

// /**
//  * Three js Clock
//  */
// // const clock = new THREE.Clock()

// /**
//  * frame loop
//  */
// function tic() {
// 	/**
// 	 * tempo trascorso dal frame precedente
// 	 */
// 	// const deltaTime = clock.getDelta()
// 	/**
// 	 * tempo totale trascorso dall'inizio
// 	 */
// 	// const time = clock.getElapsedTime()

// 	controls.update()

// 	renderer.render(scene, camera)

// 	requestAnimationFrame(tic)
// }

// requestAnimationFrame(tic)

// window.addEventListener('resize', handleResize)

// function handleResize() {
// 	sizes.width = window.innerWidth
// 	sizes.height = window.innerHeight

// 	camera.aspect = sizes.width / sizes.height
// 	camera.updateProjectionMatrix()

// 	renderer.setSize(sizes.width, sizes.height)

// 	const pixelRatio = Math.min(window.devicePixelRatio, 2)
// 	renderer.setPixelRatio(pixelRatio)
// }
