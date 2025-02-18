import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import vertexShader from '../../shaders/vertexShader.glsl';
import fragmentShader from '../../shaders/fragmentShader.glsl';

const WavingPlane = ({ image, width, height }) => {

  const meshRef = useRef();
  const texture = useTexture(image);
  const [hovered, setHovered] = useState(false);

  // Create shader material with uniforms
  const shaderMaterial = React.useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: texture },
          uHover: { value: 0 },
        },
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
      }),
    [texture]
  );

  // Update time uniform on each frame
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      // Smooth transition for hover effect
      meshRef.current.material.uniforms.uHover.value = THREE.MathUtils.lerp(
        meshRef.current.material.uniforms.uHover.value,
        hovered ? 1 : 0,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      material={shaderMaterial}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
     
      <planeGeometry args={[width, height, 52, 52]} />
    </mesh>
  );
};

export default WavingPlane;