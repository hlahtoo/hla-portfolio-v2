import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/interface";
import { ScrollManager } from "./components/ScrollManager";
import { Suspense, useEffect, useState } from "react";
import { Menu } from "./components/Menu";
import { framerMotionConfig } from "../config";
import { Leva } from "leva";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [experienceReady, setExperienceReady] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen
        started={started}
        setStarted={setStarted}
        experienceReady={experienceReady}
      />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                <Experience
                  section={section}
                  menuOpened={menuOpened}
                  onSectionChangeFromApp={setSection}
                  setExperienceReady={setExperienceReady}
                />
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Cursor />
      <Leva hidden />
    </>
  );
}

export default App;
