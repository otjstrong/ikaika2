import React, { useState, useEffect } from "react";
import { Text3D, Center, Float, MeshTransmissionMaterial } from "@react-three/drei";
import gsap from 'gsap';
import { useThree } from "@react-three/fiber";

export default function Shapes({
  showOverlayOne, setShowOverlayOne,
  showOverlayTwo, setShowOverlayTwo,
  showOverlayThree, setShowOverlayThree,
  showOverlayFour, setShowOverlayFour,
  showOverlayFive, setShowOverlayFive,
  showOverlaySix, setShowOverlaySix
}) {
  const { camera, scene } = useThree();
  const [hoveredText, setHoveredText] = useState("     HELLO      ");

  const handleMouseEnter = (mesh, text) => {
    document.body.style.cursor = 'pointer';
    gsap.to(mesh.rotation, {
      y: mesh.rotation.y + Math.PI * 2, // 360 degrees
      duration: 2,
      ease: 'power2.inOut'
    });
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';
  };

  const toggleOverlay = (setShowOverlay) => {
    setShowOverlay(prev => !prev);
  };

  useEffect(() => {
    if (!showOverlayOne && !showOverlayTwo && !showOverlayThree && !showOverlayFour && !showOverlayFive && !showOverlaySix) {
      setHoveredText("     HELLO      ");
    }
  }, [showOverlayOne, showOverlayTwo, showOverlayThree, showOverlayFour, showOverlayFive, showOverlaySix]);

  return (
    <>
      <Center position={[0, 0, -1]}>
        <Text3D
          smooth={1}
          scale={0.02}
          size={80}
          height={1}
          curveSegments={10}
          bevelThickness={10}
          bevelSize={2}
          bevelOffset={0}
          bevelSegments={5}
          font="/Inter_Bold.json"
        >
          {hoveredText}
          <meshStandardMaterial color={"#010100"} />
        </Text3D>
      </Center>

      <group position={[-2.5, 1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlayOne)}
            scale={2}
            position={[0, 0.15, 0]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "     ABOUT     ")}
            onPointerLeave={handleMouseLeave}
          >
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#8DC0FF"} thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[0, 1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlayThree)}
            scale={0.2}
            position={[0, 0, 0]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "STARTUPS")}
            onPointerLeave={handleMouseLeave}
          >
            <torusGeometry args={[3, 1.5, 16, 100]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#007FFF"} thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[2.5, 1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlayFour)}
            scale={0.2}
            position={[0, 0, 0]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "RESOURCES")}
            onPointerLeave={handleMouseLeave}
          >
            <octahedronGeometry args={[5, 0]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#8DC0FF"} thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[-2.5, -1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlayTwo)}
            scale={2}
            position={[0, 0.15, 0]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "THOUGHTS")}
            onPointerLeave={handleMouseLeave}
          >
            <sphereGeometry args={[0.5, 22, 50]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#007FFF"} thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[0, -1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlayFive)}
            scale={0.2}
            position={[0, 0, 0]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "INVESTING")}
            onPointerLeave={handleMouseLeave}
          >
            <torusKnotGeometry args={[3, 1, 100, 16]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#8DC0FF"} thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[2.5, -1.15, 0]}>
        <Float speed={2} rotationIntensity={1.5}>
          <mesh
            onClick={() => toggleOverlay(setShowOverlaySix)}
            scale={0.2}
            position={[0, 0, 0]}
            rotation={[0, 0, Math.PI * 1]}
            onPointerEnter={(e) => handleMouseEnter(e.object, "CONTACT")}
            onPointerLeave={handleMouseLeave}
          >
            <coneGeometry args={[5, 7.5, 10]} />
            <MeshTransmissionMaterial transmissionSampler={true} color={"#007FFF"} thickness={2} />
          </mesh>
        </Float>
      </group>
    </>
  );
}

