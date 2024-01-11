'use client';
import styles from '@/styles/codingSkills.module.css';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { AsciiRenderer, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

const RotatingMesh: React.FC<{ geometry: THREE.BufferGeometry }> = ({ geometry }) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.z -= 0.01;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 100, 150]} intensity={3} />
            <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
                <bufferGeometry attach="geometry" {...geometry} />
                <meshStandardMaterial attach="material" color={'grey'} />
            </mesh>
        </>

    );
};


const ModelLoader = () => {
    const stl = useLoader(STLLoader, '/models/thinker.stl');

    return (
        <RotatingMesh geometry={stl} />
    );
};

const DynamicModelLoader = dynamic(
    () => Promise.resolve(ModelLoader), // wrap ModelLoader in a Promise
    { ssr: false }
)


const Ascii3D = () => {
    return (
        <div className={styles.canvasContainer}>
            <div className={styles.spinning3DModel}>
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 350, 0]} />
                        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                        <AsciiRenderer bgColor='' invert={false} fgColor='#fd8000' />
                        <DynamicModelLoader />
                    </Canvas>
            </div>
        </div>
    );


};

export default Ascii3D;