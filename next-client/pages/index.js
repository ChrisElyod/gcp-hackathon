import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, FirstPersonControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Index() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
    <Canvas>
      {/* <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 10]} /> */}
      <OrthographicCamera>
        <mesh>
          <planeGeometry width={1920} height={1080}/>
          <meshStandardMaterial />
        </mesh>
      </OrthographicCamera>
    </Canvas>
    </div>
  );
} 
