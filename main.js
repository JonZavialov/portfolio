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