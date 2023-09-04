import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/screen-transformed.glb');

  const [rotationY, setRotationY] = useState(0.0);
  const [direction, setDirection] = useState(1); // 1 para incrementar, -1 para decrementar

  useEffect(() => {
    const interval = setInterval(() => {
      if (rotationY >= 0.7) {
        setDirection(-1); // Cambia la dirección cuando llega a 0.9
      } else if (rotationY <= -0.7) {
        setDirection(1); // Cambia la dirección cuando llega a -0.9
      }

      setRotationY(rotationY + direction * 0.01);
    }, 10); // Cambia la rotación cada 10 milisegundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [rotationY, direction]);

  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Screen_ComputerScreen_0.geometry}
      material={materials.ComputerScreen} 
      position={[0, 0.65, -10.3]} 
      rotation={[Math.PI, rotationY, Math.PI]} 
      scale={[90, 90, 88.24]} />
    </group>
  )
}

useGLTF.preload('/screen-transformed.glb')
