import {useEffect, useState} from "react";

interface MouseState {
  x: number;
  y: number;
  isDown: boolean;
}

export function useMouse() {
  const [mouse, setMouse] = useState<MouseState>({x: 0, y: 0, isDown: false});

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse((prev) => ({...prev, x: e.clientX, y: e.clientY}));
    };
    const handleDown = () => {
      setMouse((prev) => ({...prev, isDown: true}));
    };
    const handleUp = () => {
      setMouse((prev) => ({...prev, isDown: false}));
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return mouse;
}
