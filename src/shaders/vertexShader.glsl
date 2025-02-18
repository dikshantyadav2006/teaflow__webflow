uniform float uTime;
uniform float uHover;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 pos = position;
  pos.z += sin(pos.x * 9.0 + uTime) * .001; // Wave effect

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
