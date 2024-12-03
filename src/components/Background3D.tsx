import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 6000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  
  const color = new THREE.Color();
  const baseColor = '#6366f1';

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 4;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    color.set(baseColor).multiplyScalar(0.5 + Math.random() * 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      ref.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <Points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          usage={THREE.StaticDrawUsage}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
          usage={THREE.StaticDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 2]}
      >
        <Stars />
      </Canvas>
    </div>
  );
};