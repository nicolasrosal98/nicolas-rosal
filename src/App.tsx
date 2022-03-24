import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, Euler } from "@react-three/fiber";
import { Suspense, useState } from "react";
import RigCharacter from "./utils/RigCharacter";

type View = "front" | "back" | "left";

export default function App(): JSX.Element {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [view, setView] = useState<View>("front");

  function calculateRotation(v: View): Euler {
    switch (v) {
      case "front":
        return [0, Math.PI, 0];
      case "back":
        return [0, 0, 0];
      case "left":
        return [0, Math.PI / 2, 0];
      default:
        return [0, 0, 0];
    }
  }

  return (
    <div className="body-canvas">
      <div className="buttons">
        <button onClick={() => setShouldAnimate((prev) => !prev)}>
          Click to Play/Stop
        </button>
        <br />
        <button onClick={() => setView("front")}>Front View</button>
        <button onClick={() => setView("back")}>Back View</button>
        <button onClick={() => setView("left")}>Left View</button>
      </div>
      <Canvas>
        <Suspense fallback={<Html>Loading...</Html>}>
          <RigCharacter
            rotation={calculateRotation(view)}
            position={[0, -0.7, 3.5]}
            action={shouldAnimate}
          />
        </Suspense>
        <directionalLight position={[-10, 0, 0]} />
        <ambientLight intensity={0.5} />
        {/* <gridHelper args={[10, 10, `white`, `gray`]} /> */}
        {/* <axesHelper scale={[5,5,5]} position={[0,0,0]}/> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
