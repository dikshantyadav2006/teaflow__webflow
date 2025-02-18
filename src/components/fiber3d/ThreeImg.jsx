import React, { useEffect, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import WavingPlane from "./WavingPlane";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Bloom } from "@react-three/postprocessing";

const ThreeImg = (image) => {

  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
  const canvasContainerRef = useRef();
  const calculateDimensions = () => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();

      // Extract width and height from the canvas container in pixels
      const widthInPixels = rect.width;
      const heightInPixels = rect.height;

      const aspectRatio = widthInPixels / heightInPixels;

      // Get the camera from the Three.js scene
      const fov = 75; // Field of view (same as default camera)
      const cameraZ = 5; // Distance of the camera from the plane

      // Convert height in pixels to height in world units
      const heightInWorldUnits = 2 * Math.tan((fov * Math.PI) / 360) * cameraZ;
      const widthInWorldUnits = heightInWorldUnits * aspectRatio;

      setDimensions({
        width: widthInWorldUnits,
        height: heightInWorldUnits,
      });
    }
  };

  useEffect(() => {
    // Calculate dimensions on mount
    calculateDimensions();

    // Recalculate dimensions on window resize
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  return (
    <div  ref={canvasContainerRef} className="w-full h-full">
        <Canvas
          flat
          className="w-full h-full p-5 bg-transparent"
          camera={{
            position: [0, 0, 5], // Fix camera position
            fov: 75, // Field of view
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 40]} />
          <WavingPlane
            image={image.img}
            width={dimensions.width}
            height={dimensions.height}
          />
        </Canvas>
    </div>
  );
};

export default ThreeImg;
