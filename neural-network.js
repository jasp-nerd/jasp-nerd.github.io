// Neural Network Three.js visualization for portfolio
// Add this code to a new file (e.g., neural-network.js)
// Make sure to include three.js in your HTML: <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// Initialize scene on document load
document.addEventListener('DOMContentLoaded', function() {
  // Create container for the network
  const container = document.createElement('div');
  container.id = 'neural-network-container';
  container.style.position = 'fixed'; // Changed from absolute to fixed for better mobile behavior
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '-1';
  container.style.overflow = 'hidden'; // Prevent scrolling issues on mobile
  document.body.appendChild(container);

  // Initialize Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Create neural network structure - smaller for mobile
  // Detect if device is mobile
  const isMobile = window.innerWidth < 768;
  
  // Adjust network size based on device
  const layers = isMobile ? 3 : 4; // Added one more layer for both mobile and desktop
  const neuronsPerLayer = isMobile ? 4 : 6;
  const network = new NeuralNetwork(layers, 4, 3, neuronsPerLayer);
  scene.add(network.mesh);

  // Position camera - further back to accommodate new layer
  camera.position.z = isMobile ? 12 : 18;

  // Handle window resize and orientation change
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Adjust for mobile
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 12 : 18; // Adjusted camera position for extra layer
    
    // Reduce complexity on mobile devices
    if (isMobile) {
      // Adjust performance settings for mobile
      renderer.setPixelRatio(window.devicePixelRatio * 0.7);
    } else {
      renderer.setPixelRatio(window.devicePixelRatio);
    }
  }
  
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    network.update();
    renderer.render(scene, camera);
  }
  animate();
});

// Neural Network class
class NeuralNetwork {
  constructor(layers, width, depth, neuronsPerLayer) {
    this.mesh = new THREE.Group();
    
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;
    
    // Materials - optimized for mobile
    this.neuronMaterial = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
    this.activeMaterial = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
    this.lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x0088FF, 
      transparent: true, 
      opacity: 0.5,
      // Lower quality on mobile for better performance
      linewidth: isMobile ? 1 : 1.5
    });
    
    // Create neurons
    this.neurons = [];
    this.connections = [];
    
    // Calculate positions - adjusted spacing for more layers
    const layerSpacing = isMobile ? 4.5 : 4; // Slightly tighter spacing to fit more layers
    const neuronSpacing = 2;
    
    for (let layer = 0; layer < layers; layer++) {
      this.neurons[layer] = [];
      
      for (let i = 0; i < neuronsPerLayer; i++) {
        // Position neurons in a grid for each layer
        const posX = layer * layerSpacing - (layers * layerSpacing) / 2;
        const posY = i * neuronSpacing - (neuronsPerLayer * neuronSpacing) / 2;
        
        // Create neuron (sphere)
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const neuron = new THREE.Mesh(geometry, this.neuronMaterial);
        neuron.position.set(posX, posY, 0);
        
        this.neurons[layer].push({
          mesh: neuron,
          active: false,
          lastActive: 0,
          position: new THREE.Vector3(posX, posY, 0)
        });
        
        this.mesh.add(neuron);
      }
    }
    
    // Create connections between layers
    for (let layer = 0; layer < layers - 1; layer++) {
      for (let from = 0; from < this.neurons[layer].length; from++) {
        for (let to = 0; to < this.neurons[layer + 1].length; to++) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            this.neurons[layer][from].position,
            this.neurons[layer + 1][to].position
          ]);
          
          const line = new THREE.Line(geometry, this.lineMaterial);
          this.mesh.add(line);
          
          this.connections.push({
            from: this.neurons[layer][from],
            to: this.neurons[layer + 1][to],
            line: line,
            active: false,
            lastActive: 0
          });
        }
      }
    }
    
    // Rotate the entire network
    this.mesh.rotation.x = 0.2;
  }
  
  update() {
    const now = Date.now();
    
    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    const activationProbability = isMobile ? 0.03 : 0.05; // Lower probability on mobile for performance
    
    // Randomly activate neurons and connections
    if (Math.random() < activationProbability) {
      const layer = Math.floor(Math.random() * (this.neurons.length - 1));
      const neuronIndex = Math.floor(Math.random() * this.neurons[layer].length);
      
      const neuron = this.neurons[layer][neuronIndex];
      neuron.active = true;
      neuron.lastActive = now;
      neuron.mesh.material = this.activeMaterial;
      
      // Activate connections from this neuron
      for (let i = 0; i < this.connections.length; i++) {
        if (this.connections[i].from === neuron) {
          this.connections[i].active = true;
          this.connections[i].lastActive = now;
          this.connections[i].line.material.opacity = 1;
          
          // Activate target neuron with delay
          setTimeout(() => {
            this.connections[i].to.active = true;
            this.connections[i].to.lastActive = now + 200;
            this.connections[i].to.mesh.material = this.activeMaterial;
          }, 200);
        }
      }
    }
    
    // Deactivate neurons and connections after a while
    for (let layer = 0; layer < this.neurons.length; layer++) {
      for (let i = 0; i < this.neurons[layer].length; i++) {
        const neuron = this.neurons[layer][i];
        if (neuron.active && now - neuron.lastActive > 500) {
          neuron.active = false;
          neuron.mesh.material = this.neuronMaterial;
        }
      }
    }
    
    for (let i = 0; i < this.connections.length; i++) {
      const connection = this.connections[i];
      if (connection.active && now - connection.lastActive > 300) {
        connection.active = false;
        connection.line.material.opacity = 0.5;
      }
    }
    
    // Subtle animation
    this.mesh.rotation.y += 0.001;
  }
}