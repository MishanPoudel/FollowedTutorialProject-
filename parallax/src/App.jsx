import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import cat from "../src/assets/cat.gif";
import land from "../src/assets/land.png";
import moon from "../src/assets/moon.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  return (
    <>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer offset={0} factor={2} speed={1}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'cover',
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={4}
         style={{
           backgroundImage: `url(${land})`,
           backgroundSize: 'cover',
          }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.05} onClick={()=> ref.current.scrollTo(3)}>
          <h2>Misery is the</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2} onClick={()=> ref.current.scrollTo(0)}>
          <h2>Monkey King</h2>
        </ParallaxLayer>
        <ParallaxLayer
        sticky={{start:0.9, end: 2.5}}>
          <img src={cat}/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
