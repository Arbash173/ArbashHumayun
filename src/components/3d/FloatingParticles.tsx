'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingParticles({ count = 1000 }) {
  const ref = useRef<THREE.Points>(null)
  const { mouse } = useThree()

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.1, 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.1, 0.1)
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}
