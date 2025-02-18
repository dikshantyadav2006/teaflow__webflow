uniform sampler2D uTexture;
uniform float uHover;
uniform vec2 uMouse;  // Normalized mouse coordinates (0 to 1)
uniform float uRadius; // Radius of the hover effect

varying vec2 vUv;

void main() {
  vec4 texColor = texture2D(uTexture, vUv);
  
  if (texColor.a < 0.5) {
    discard;
  }

  // Calculate the distance from the hover point
  float dist = distance(vUv, uMouse);
  
  // Create a smoothstep function to darken areas near the hover point
  float hoverEffect = smoothstep(uRadius, 0.0, dist);
  
  // Reduce brightness near the hover effect
  texColor.rgb *= mix(1.0, 0.5, hoverEffect * uHover);

  gl_FragColor = texColor;
}
