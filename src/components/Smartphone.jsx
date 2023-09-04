import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/smartphone-transformed.glb')
  const [rotationY, setRotationY] = useState(3.15);
  const [direction, setDirection] = useState(1); // 1 para incrementar, -1 para decrementar

  useEffect(() => {
    const interval = setInterval(() => {
      if (rotationY >= 3.9) {
        setDirection(-1); // Cambia la dirección cuando llega a 0.9
      } else if (rotationY <= 2.3) {
        setDirection(1); // Cambia la dirección cuando llega a -0.9
      }

      setRotationY(rotationY + direction * 0.01);
    }, 10); // Cambia la rotación cada 10 milisegundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [rotationY, direction]);
  
  return (
    <group {...props} dispose={null} rotation={[Math.PI, rotationY, Math.PI]}>
      <group position={[0.1, 2.4, 0]}>
        <mesh geometry={nodes.Object_12.geometry} material={materials.Color_1}/>
        <mesh geometry={nodes.Object_13.geometry} material={materials.Black} />
      </group>
      <group position={[0.1, 2.4, 0]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Color_1} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Color_2} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Black_3} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Black_2} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Camera_Lens} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Glass} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Lock_Screen} position={[0.1, 2.4, -0.03]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Glass} position={[0.1, 2.4, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Black_2} position={[0.11, 2.4, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Black_2} position={[0.09, 2.4, 0]} />
    </group>
  )
}

useGLTF.preload('/smartphone-transformed.glb')
