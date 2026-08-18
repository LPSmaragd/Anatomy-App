import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import hotspots from './data/structures.json'

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url)
  return <primitive object={gltf.scene} />
}

function Hotspot({ data, onSelect }: any) {
  const pos = useMemo(() => data.hotspot || [0, 0, 0], [data.hotspot])
  return (
    <mesh position={pos as any} onClick={() => onSelect(data.id)}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Viewer({ onSelect }: { onSelect: (id: string) => void }) {
  // Using a public sample glb as placeholder. Replace with anatomical models later.
  const demoUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb'

  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <Suspense fallback={null}>
        <Model url={demoUrl} />
        {hotspots.map((h) => (
          <Hotspot key={h.id} data={h} onSelect={onSelect} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb')
