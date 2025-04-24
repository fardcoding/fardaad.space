const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("solarCanvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sun
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Planets
const createPlanet = (size, color, distance) => {
  const geometry = new THREE.SphereGeometry(size, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color });
  const planet = new THREE.Mesh(geometry, material);
  planet.userData = { distance, angle: Math.random() * Math.PI * 2 };
  scene.add(planet);
  return planet;
};

const planets = {
  earth: createPlanet(0.5, 0x3a9bdc, 5),
  saturn: createPlanet(0.7, 0xffd27f, 8),
  mars: createPlanet(0.4, 0xdc4c3a, 6),
  moon: createPlanet(0.3, 0xbbbbbb, 4)
};

const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 0, 0);
scene.add(light);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  Object.values(planets).forEach((planet) => {
    planet.userData.angle += 0.01;
    planet.position.x = planet.userData.distance * Math.cos(planet.userData.angle);
    planet.position.z = planet.userData.distance * Math.sin(planet.userData.angle);
  });

  renderer.render(scene, camera);
}

animate();

// Scroll-to-section handler
function navigateTo(sectionId) {
  document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}
