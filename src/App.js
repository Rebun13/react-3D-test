import './App.css';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, useTexture  } from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function Scene() {
    const fbx = useLoader(FBXLoader, 'Station/Station_low.fbx')
    const props = useTexture({
      map: 'Station/Station_base_Material__25_BaseColor.png',
      normalMap: 'Station_base_Material__25_Normal.png',
      aoMap: 'Station_base_Material__25_OcclusionRoughnessMetallic.png',
    })
    return <primitive object={fbx} texture={props}/>
}

function App() {
  
  
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas>
          <Scene position={[100, 10, 10]}/>
          <OrbitControls />
          <Environment preset="sunset" background />
        </Canvas>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)

export default App;
