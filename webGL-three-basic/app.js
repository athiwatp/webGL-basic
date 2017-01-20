/* global THREE, requestAnimationFrame */
var scene = new THREE.Scene() // ประกาศหน้าจอ
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // กล้องจะเรียกว่าการมองเห็นก็ได้นะครับ

var renderer = new THREE.WebGLRenderer({alpha: true}) // ถ้าให้ประมาณคงเหมือน background มั้ง ถ้าใส่ alpha = true จะโปร่งเเสง
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// สร้างวัตถุ
var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({ color: 0xFF0000 })
var cube = new THREE.Mesh(geometry, material)

// ใส่วัตถุลงไปใน scene
scene.add(cube)
// set ขาตั้งกล้อง
camera.position.z = 5

function render () {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.1
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}
render()
