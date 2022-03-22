import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RigCharacter from "./utils/RigCharacter";

export default function App(): JSX.Element {  
  
  return (
    <Canvas
    >
      <Suspense fallback={<Html>Loading...</Html>}>
        <RigCharacter rotation={[0,Math.PI, 0]} position={[0,0,3]}/>
      </Suspense>
      
      <directionalLight position={[-10,0,0]} />
      <ambientLight intensity={0.5}/>
      {/* <gridHelper args={[10, 10, `white`, `gray`]} /> */}
      <axesHelper scale={[5,5,5]} position={[0,0,0]}/>
      <OrbitControls />
    </Canvas>
  );
}
