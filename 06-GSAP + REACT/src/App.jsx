import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const App = () => {
  // const gsapRef = useRef();
  const [positionX, setPositionX] = useState();
  const [positionY, setPositionY] = useState();
  const [rotation, setRotation] = useState();

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-300, 300, 100);
  const rotate = gsap.utils.random(-360, 360, 30);

  useGSAP(() => {
    gsap.to("#box", {
      x: positionX,
      y: positionY,
      rotate: rotation,
      duration: 0.5,
      // opacity: 0,
      // scale: 0,
      // repeat: -1,
      // yoyo: true,
    });
  }, [positionX, positionY, rotation]);

  return (
    <div id="page">
      <button
        onClick={() => {
          setPositionX(randomX);
          setPositionY(randomY);
          setRotation(rotate)
        }}
      >
        Animate
      </button>
      <div id="container">
        {/* <div id="circle"></div> */}
        <div id="box"></div>
      </div>
      
    </div>
  );
};

export default App;
