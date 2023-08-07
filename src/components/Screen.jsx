import React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/screen-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Screen_ComputerScreen_0.geometry}
      material={materials.ComputerScreen} 
      position={[0, 0.65, -10.3]} 
      rotation={[Math.PI, 0, Math.PI]} 
      scale={[90, 90, 88.24]} />
    </group>
  )
}

useGLTF.preload('/screen-transformed.glb')
