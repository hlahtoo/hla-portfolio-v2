import * as THREE from "three";
import { useTexture } from "@react-three/drei";

// Load all textures using useTexture
export function useRoomTextures() {
  const texturePaths = {
    First: "/textures/room/day/first_texture_set_day.webp",
    Second: "/textures/room/day/second_texture_set_day.webp",
    Third: "/textures/room/day/third_texture_set_day.webp",
    Fourth: "/textures/room/day/fourth_texture_set_day.webp",
  };

  const loadedTextures = useTexture({
    First: texturePaths.First,
    Second: texturePaths.Second,
    Third: texturePaths.Third,
    Fourth: texturePaths.Fourth,
  });

  // Ensure correct texture properties
  Object.values(loadedTextures).forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  });

  return loadedTextures;
}

// Environment Map (Skybox)
export function useEnvironmentMap() {
  return useTexture({
    px: "textures/skybox/px.webp",
    nx: "textures/skybox/nx.webp",
    py: "textures/skybox/py.webp",
    ny: "textures/skybox/ny.webp",
    pz: "textures/skybox/pz.webp",
    nz: "textures/skybox/nz.webp",
  });
}

// Glass Material
export function useGlassMaterial() {
  const environmentMap = useEnvironmentMap();

  return new THREE.MeshPhysicalMaterial({
    transmission: 1,
    opacity: 1,
    color: 0xfbfbfb,
    metalness: 0,
    roughness: 0,
    ior: 3,
    thickness: 0.01,
    specularIntensity: 1,
    envMap: environmentMap,
    envMapIntensity: 1,
    depthWrite: false,
    specularColor: 0xfbfbfb,
  });
}

// White Material (for specific meshes)
export const whiteMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});

// Create a Shader Material for Textured Room
export function createMaterialForTexture(texture) {
  return new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });
}

// Define Room Materials
export function useRoomMaterials() {
  const textures = useRoomTextures();

  return {
    First: createMaterialForTexture(textures.First),
    Second: createMaterialForTexture(textures.Second),
    Third: createMaterialForTexture(textures.Third),
    Fourth: createMaterialForTexture(textures.Fourth),
  };
}
