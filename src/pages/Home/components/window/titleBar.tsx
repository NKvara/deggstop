import {useMouse} from "@/hooks/useMouse";
import {useHover} from "@/hooks/useHover";
import {useEffect, useState} from "react";
interface TitleBarProps {
  setPosition: React.Dispatch<React.SetStateAction<{x: number; y: number}>>;
}

const TitleBar = ({setPosition}: TitleBarProps) => {
  const {isDown, x, y} = useMouse();
  const {ref, relativePos} = useHover<HTMLDivElement>();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging && relativePos) {
      setPosition({
        x: x - relativePos.x,
        y: y - relativePos.y,
      });
      if (isDown === false) {
        setIsDragging(isDown);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDown, x, y]);

  return (
    <div
      ref={ref}
      className="w-full h-10 bg-blue-800/20"
      onMouseDown={() => setIsDragging(true)}
    >
      TitleBar
    </div>
  );
};

export default TitleBar;
