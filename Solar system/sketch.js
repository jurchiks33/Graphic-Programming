let sunTexture;
let planetTextures = [];
let planets = [];
let angle = 0;

function preload() {
    // Load textures from local assets folder
    sunTexture = loadImage('assets/sun_texture.jpg');
    planetTextures = [
        loadImage('assets/mercury_texture.jpg'),
        loadImage('assets/venus_texture.jpg'),
        loadImage('assets/earth_texture.jpg'),
        loadImage('assets/mars_texture.jpg'),
        loadImage('assets/jupiter_texture.jpg'),
        loadImage('assets/saturn_texture.jpg')
    ];
}

function setup() {
    createCanvas(900, 600, WEBGL);
    createPlanets();  
}

function draw() {
    background(10, 10, 30);  
    
    // Lights to create a glowing effect
    pointLight(255, 255, 255, 0, 0, 0);  // Light from the sun
    
    rotateView();  // Rotate camera around the solar system

    // Draw the Sun
    push();
    texture(sunTexture);
    noStroke();
    sphere(70);  
    pop();

    // Draw planets with orbits and rotation
    for (let planet of planets) {
        planet.update();
        planet.display();
    }
}

// Rotate the view around the planets
function rotateView() {
    rotateY(angle);
    angle += 0.002;  // Slow orbiting camera
}

// Create planets with their properties
function createPlanets() {
    planets.push(new PlanetOrbit(90, 12, planetTextures[0], 0.02));   // Mercury
    planets.push(new PlanetOrbit(140, 18, planetTextures[1], 0.015)); // Venus
    planets.push(new PlanetOrbit(200, 20, planetTextures[2], 0.012)); // Earth
    planets.push(new PlanetOrbit(270, 16, planetTextures[3], 0.009)); // Mars
    planets.push(new PlanetOrbit(350, 30, planetTextures[4], 0.007)); // Jupiter
    planets.push(new PlanetOrbit(450, 26, planetTextures[5], 0.005)); // Saturn
}

// Class to represent orbiting planets
class PlanetOrbit {
    constructor(distance, radius, texture, speed) {
        this.distance = distance;
        this.radius = radius;
        this.texture = texture;
        this.angle = random(TWO_PI);
        this.speed = speed;
    }

    update() {
        this.angle += this.speed;  // Move along the orbit
    }

    display() {
        push();
        
        // Calculate planet position in 3D space
        let x = this.distance * cos(this.angle);
        let z = this.distance * sin(this.angle);
        translate(x, 0, z);

        // Draw the planet with its texture
        texture(this.texture);
        noStroke();
        sphere(this.radius);
        
        pop();
    }
}