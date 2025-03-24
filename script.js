document.addEventListener("DOMContentLoaded", function() {
    console.log("Advanced Portfolio Loaded Successfully! 🚀");
    initBackgroundAnimation();
});

function initBackgroundAnimation() {
    const bgAnimation = document.getElementById('bg-animation');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    bgAnimation.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 'white',
        transparent: true,
        opacity: 0.3
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 20;

    // Animate particles
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    // Responsive
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    animate();
}

function toggleCerts() {
    const list = document.getElementById("ibm-certs");
    list.style.display = list.style.display === "none" ? "block" : "none";
}




// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Portfolio Loaded Successfully! 🚀");
// });
