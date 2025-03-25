import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#f3d9fa",
  });
  const data = useScroll();

  const tl = useRef();

  useFrame(() => {
    tl.current?.progress(data.scroll.current);
    material.current.color = new THREE.Color(color.current.color);
  });

  useEffect(() => {
    // Explicitly set the initial color before animation starts
    color.current.color = "#f3d9fa";
    material.current.color = new THREE.Color("#f3d9fa");

    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#9b96dd",
    });
    tl.current.to(color.current, {
      color: "#7a7ca5",
    });
    tl.current.to(color.current, {
      color: "#9b96dd",
    });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
