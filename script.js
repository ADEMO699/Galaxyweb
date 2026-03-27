// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Galaxy particles
const particlesGeometry = new THREE.BufferGeometry();
const count = 8000;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i += 3) {
  const radius = Math.random() * 25;
  const angle = Math.random() * Math.PI * 2;
  const wave = Math.sin(radius * 0.5) * 1.9;
  positions[i] = Math.cos(angle) * radius;
  positions[i + 1] = (Math.random() - 0.5) * 5 + wave;
  positions[i + 2] = Math.sin(angle) * radius;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.03,
  color: 0xa855f7,
  transparent: true,
  opacity: 0.85,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

const centerGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const centerMaterial = new THREE.MeshStandardMaterial({
  color: 0xbf73ff,
  emissive: 0x8f17ff,
  emissiveIntensity: 0.9,
  roughness: 0.2,
  metalness: 0.4,
});
const center = new THREE.Mesh(centerGeometry, centerMaterial);
scene.add(center);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xc765ff, 2, 80);
pointLight.position.set(0, 0, 4);
scene.add(pointLight);

camera.position.z = 8;

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 1.2;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 1.2;
});

function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.002;
  particles.rotation.x += 0.0005;

  center.rotation.y += 0.006;
  center.rotation.x += 0.004;

  const targetY = mouseX * 0.25;
  const targetX = mouseY * 0.25;
  scene.rotation.y += (targetY - scene.rotation.y) * 0.06;
  scene.rotation.x += (targetX - scene.rotation.x) * 0.06;

  renderer.render(scene, camera);
}
animate();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Responsive canvas
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
