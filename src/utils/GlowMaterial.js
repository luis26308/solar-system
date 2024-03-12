import * as THREE from 'three';

const GlowMaterial = new THREE.ShaderMaterial({
  uniforms: {
    coefficient: { value: 1.0 },
    power: { value: 4.0 },
    glowColor: { value: new THREE.Color('blue') },
  },
  vertexShader: `
    uniform float coefficient;
    uniform float power;
    varying vec3 vNormal;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float coefficient;
    uniform float power;
    uniform vec3 glowColor;
    varying vec3 vNormal;

    void main() {
      float intensity = pow(coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power);
      gl_FragColor = vec4(glowColor, intensity);
    }
  `,
  transparent: true,
});

export default GlowMaterial;
