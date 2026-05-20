import React from "react";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const normalizedScale = isMobile ? 0.4 : 0.6;
  const normalizedPosition = isMobile ? [0, -2.0, -1.0] : [0, -3.2, -1.2];

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.center();
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
    computer.scene.scale.set(normalizedScale, normalizedScale, normalizedScale);
    computer.scene.position.set(...normalizedPosition);
  }, [computer, normalizedScale, normalizedPosition]);

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <Float
       speed={2}
  rotationIntensity={0.2}
  floatIntensity={1.5}
  floatingRange={[0, 0]}
      >
        <primitive
          object={computer.scene}
        />
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    // screen size change hone ke liye llistner
    const mediaQuery = window.matchMedia("(max-width:640px)");

    // 'ismobile' variable bna kr uski value set kii
    setisMobile(mediaQuery.matches);

    // call backfunction define kiya media query me changes ke liye
    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    // call back function ko as a listner liya media query me change krne ke liye
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
           enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
