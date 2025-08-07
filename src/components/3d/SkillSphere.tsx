'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { Skill } from '@/types'

interface SkillSphereProps {
  skills: Skill[]
  radius?: number
}

export function SkillSphere({ skills, radius = 3 }: SkillSphereProps) {
  const groupRef = useRef<THREE.Group>(null)

  const skillPositions = useMemo(() => {
    const positions: { skill: Skill; position: [number, number, number] }[] = []
    
    skills.forEach((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi
      
      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)
      
      positions.push({
        skill,
        position: [x, y, z]
      })
    })
    
    return positions
  }, [skills, radius])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {skillPositions.map(({ skill, position }) => (
        <Text
          key={skill.name}
          position={position}
          fontSize={0.2}
          color={getSkillColor(skill.category)}
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      ))}
    </group>
  )
}

function getSkillColor(category: Skill['category']): string {
  switch (category) {
    case 'frontend':
      return '#3b82f6'
    case 'backend':
      return '#10b981'
    case 'tools':
      return '#f59e0b'
    case 'ai':
      return '#8b5cf6'
    default:
      return '#6b7280'
  }
}
