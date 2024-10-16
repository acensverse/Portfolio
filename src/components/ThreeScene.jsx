// src/GLBViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../App.css'

function Model({ path }) {
  // Use the useGLTF hook from @react-three/drei to load the .glb file
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

function GLBViewer({ modelPath }) {
  return (
    <div className='absolute mt-[-51rem] xl:mt-[-80rem] ml-[2rem] xl:ml-[65rem] h-[20rem] xl:h-[35rem]'>
      <Canvas style={{  }} camera={{ position: [2.5, 1, 5], fov: 25 }}>
      {/* Add ambient light and directional light */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      
      {/* OrbitControls with zoom disabled */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />

      {/* Load and display the model */}
      <Suspense fallback={null}>
        <Model path={modelPath} position={[30, 100, 0]} />
      </Suspense>
    </Canvas>
    </div>
  );
}

export default GLBViewer;
