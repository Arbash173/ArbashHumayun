'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box, Html } from '@react-three/drei'
import * as THREE from 'three'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  position: [number, number, number]
  onClick?: () => void
}

export function ProjectCard({ project, position, onClick }: ProjectCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      if (hovered) {
        meshRef.current.scale.setScalar(1.1)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[2, 3, 0.1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          setClicked(!clicked)
          onClick?.()
        }}
      >
        <meshStandardMaterial 
          color={hovered ? '#4f46e5' : '#1f2937'}
          transparent
          opacity={0.9}
        />
      </Box>
      
      <Text
        position={[0, 1, 0.1]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.title}
      </Text>
      
      <Text
        position={[0, 0.5, 0.1]}
        fontSize={0.08}
        color="#9ca3af"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.description}
      </Text>
      
      <Text
        position={[0, -0.5, 0.1]}
        fontSize={0.06}
        color="#6b7280"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.technologies.slice(0, 3).join(', ')}
      </Text>
      
      {hovered && (
        <Html position={[0, -1.5, 0.1]} center>
          <div className="bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            Click to view details
          </div>
        </Html>
      )}
    </group>
  )
}
