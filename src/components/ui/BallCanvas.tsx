'use client';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';



const Ball = ({ imageUrl }: { imageUrl: string }) => {
  const [decal] = useTexture([imageUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0,0,1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({imgUrl}:{imgUrl:string}) => {
  return(
    <Canvas
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
    >
      
        <OrbitControls
          enableZoom={false}
        />  
        <Ball imageUrl = {imgUrl}/>      
      
      <Preload all/>
    </Canvas>
  )
}
export default BallCanvas