import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene() //holds all object including cameras and lights

const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000) //camera

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
}) //makes the magic happen
renderer.setPixelRatio(window.devicePixelRatio) //sets pixel ratio to device pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight) //makes renderer full screen
camera.position.setZ(30) //moves camera away from center

renderer.render(scene, camera) //draws

const geometry = new THREE.TorusGeometry(10, 3, 16, 100) //creates object in scene
const material = new THREE.MeshStandardMaterial({color: 0xFF6347}) //can be considered a "wrapping paper" for the geometry
const torus = new THREE.Mesh(geometry, material) //combines shape and material to create the mesh

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff) //let there be light
pointLight.position.set(5, 5, 5) //moves light away from center

const ambientLight = new THREE.AmbientLight(0xffffff)// more like a floodlight
scene.add(pointLight, ambientLight) //adds light to scene

const lightHelper = new THREE.PointLightHelper(pointLight)// adds shape aroung light
const gridHelper = new THREE.GridHelper(200, 50)// creates grid
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement) //listens to mouse controls and moves camera accordingly

function animate(){
  //recursivley rerenders the scene
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  controls.update()

  renderer.render(scene, camera)
}

animate()