"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

type ColorPalette = {
  core: string;
  glow: string;
  accent: string;
};

const palette: ColorPalette = {
  core: "#FF9F1C",
  glow: "#FFE5B4",
  accent: "#2EC4B6"
};

function FloatingOrb({
  position,
  color,
  emissive = "#111"
}: {
  position: [number, number, number];
  color: string;
  emissive?: string;
}) {
  return (
    <Float speed={2.4} rotationIntensity={1.4} floatIntensity={1.8}>
      <mesh position={position} castShadow>
        <icosahedronGeometry args={[1.5, 12]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.5}
          distort={0.32}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Ribbon({
  color,
  amplitude,
  frequency,
  offset
}: {
  color: string;
  amplitude: number;
  frequency: number;
  offset: number;
}) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 100; i += 1) {
      const x = (i / 100) * 8 - 4;
      const y = Math.sin(i * frequency + offset) * amplitude;
      const z = Math.cos(i * frequency + offset) * amplitude * 0.6;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [amplitude, frequency, offset]);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points, false, "centripetal"), [points]);
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 160, 0.08, 12, false), [curve]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export function SceneCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} shadows>
        <color attach="background" args={["#05050A"]} />
        <fog attach="fog" args={["#05050A", 10, 22]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-4, -6, -5]} intensity={0.6} color={palette.accent} />

        <Suspense fallback={null}>
          <Environment preset="city" />

          <FloatingOrb position={[0, 0, 0]} color={palette.core} emissive={palette.glow} />
          <FloatingOrb position={[4, -1.5, -2]} color={palette.accent} emissive="#0C2A27" />
          <FloatingOrb position={[-4, 1.5, -3]} color="#873EFA" emissive="#2B145F" />

          <group position={[0, -3, -2]}>
            <Ribbon color="#FFE5B4" amplitude={0.8} frequency={0.11} offset={0} />
            <Ribbon color="#FF9F1C" amplitude={0.7} frequency={0.13} offset={Math.PI / 2} />
            <Ribbon color="#2EC4B6" amplitude={0.6} frequency={0.09} offset={Math.PI} />
          </group>
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
