'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { Suspense } from 'react'

interface SceneProps {
  children: React.ReactNode
  className?: string
}

export function Scene({ children, className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {children}
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
