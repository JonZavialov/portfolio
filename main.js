import './style.css'
import * as THREE from 'three'

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
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true}) //can be considered a "wrapping paper" for the geometry
const torus = new THREE.Mesh(geometry, material) //combines shape and material to create the mesh

scene.add(torus)

function animate(){
  //recursivley rerenders the scene
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  renderer.render(scene, camera)
}

animate()