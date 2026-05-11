"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.2, 32, 32]} scale={1.5}>
        <MeshDistortMaterial
          color="#1a1a1a"
          attach="material"
          distort={0.4}
          speed={1.2}
          roughness={0.3}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#555555" />
        <AbstractShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
