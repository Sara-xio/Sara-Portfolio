import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function CoreSculpture() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  const { pointer } = useThree();

  const [positions, scales] = useMemo(() => {
    const count = 380;
    const pos = new Float32Array(count * 3);
    const scl = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.7 + 0.8;

      const sinPhi = Math.sin(phi);
      pos[i * 3] = r * sinPhi * Math.cos(theta);
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      scl[i] = Math.random() * 0.8 + 0.2;
    }
    return [pos, scl];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.12 + pointer.y * 0.3;
      meshRef.current.rotation.y = time * 0.16 + pointer.x * 0.4;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -time * 0.08 + pointer.y * 0.22;
      outerRingRef.current.rotation.z = time * 0.06 + pointer.x * 0.22;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -time * 0.04 + pointer.x * 0.15;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Central Icosahedron Wireframe in Sage Green */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            wireframe
            color="#87B38D"
            emissive="#87B38D"
            emissiveIntensity={0.25}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>

        {/* Orbiting Minimal Rings in Deep Plum & Soft Blush Pink */}
        <group ref={outerRingRef}>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.3, 0.016, 16, 100]} />
            <meshStandardMaterial color="#22031F" opacity={0.65} transparent />
          </mesh>
          <mesh rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
            <torusGeometry args={[2.8, 0.014, 16, 100]} />
            <meshStandardMaterial color="#F2B7C6" opacity={0.7} transparent />
          </mesh>
        </group>

        {/* Particle Points Constellation in Sage & Plum */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.042}
            color="#87B38D"
            transparent
            opacity={0.75}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}

export function KineticSculpture() {
  return (
    <div className="w-full h-full pointer-events-none select-none relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} color="#FFFFFF" />
        <pointLight position={[-4, -4, -4]} intensity={0.9} color="#87B38D" />
        <CoreSculpture />
      </Canvas>
    </div>
  );
}
