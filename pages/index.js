import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { editable as e, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

studio.initialize();
studio.extend(extension);

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [5, 5, -5] }}>
        <SheetProvider sheet={getProject("Demo Project").sheet("Demo Sheet")}>
          <ambientLight />
          <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </SheetProvider>
      </Canvas>
    </div>
  );
}
