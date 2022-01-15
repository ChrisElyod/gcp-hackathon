import React from 'react';

const Plane = () => {
  return (
    <mesh positino={[0,0,0]}>
      <planeGeometry attach="geometry" args={[250, 250]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default Plane;