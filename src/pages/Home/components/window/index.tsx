import ResizeBox from "@/pages/Home/components/window/resizeBox";
import TitleBar from "@/pages/Home/components/window/titleBar";
import {useState} from "react";

interface WindowProps {
  width?: number;
  height?: number;
}

const Window = ({width = 600, height = 400}: WindowProps) => {
  const [size, setSize] = useState({width, height});
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      className="absolute liquid-glass"
      style={{
        width: size.width,
        height: size.height,
        top: position.y,
        left: position.x,
      }}
    >
      <TitleBar setPosition={setPosition} />
      <ResizeBox
        size={size}
        setSize={setSize}
        position={position}
        setPosition={setPosition}
      />
      WindowManager
    </div>
  );
};

export default Window;
