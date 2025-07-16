import {useEffect, useState} from "react";
import {useHover} from "@/hooks/useHover";
import {handleStyles} from "@/pages/Home/components/window/helper";
import {useMouse} from "@/hooks/useMouse";

type ResizeBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  size: {width: number; height: number};
  setSize: (size: {width: number; height: number}) => void;
  position: {x: number; y: number};
  setPosition: (position: {x: number; y: number}) => void;
};

const ResizeBox: React.FC<ResizeBoxProps> = ({
  style,
  size,
  setSize,
  position,
  setPosition,
  ...props
}) => {
  const {isDown, x, y} = useMouse();
  const {ref, relativePos} = useHover<HTMLDivElement>();
  const [isResizing, setIsResizing] = useState(-1);
  const [initial, setInitial] = useState({mx: 0, my: 0, bh: 0, bw: 0});

  useEffect(() => {
    if (isResizing >= 0 && relativePos) {
      switch (isResizing) {
        case 0:
          setSize({
            ...size,
            height: initial.bh - (y - initial.my),
          });
          setPosition({
            ...position,
            y: y - relativePos.y,
          });
          break;
        case 1:
          setSize({
            height: initial.bh - (y - initial.my),
            width: initial.bw + (x - initial.mx),
          });
          setPosition({
            ...position,
            y: y - relativePos.y,
          });
          break;
        case 2:
          setSize({
            ...size,
            width: initial.bw + (x - initial.mx),
          });
          break;
        case 3:
          setSize({
            height: initial.bh + (y - initial.my),
            width: initial.bw + (x - initial.mx),
          });
          break;
        case 4:
          setSize({
            ...size,
            height: initial.bh + (y - initial.my),
          });
          break;
        case 5:
          setSize({
            height: initial.bh + (y - initial.my),
            width: initial.bw - (x - initial.mx),
          });
          setPosition({
            ...position,
            x: x - relativePos.x,
          });
          break;
        case 6:
          setSize({
            ...size,
            width: initial.bw - (x - initial.mx),
          });
          setPosition({
            ...position,
            x: x - relativePos.x,
          });
          break;
        case 7:
          setSize({
            height: initial.bh - (y - initial.my),
            width: initial.bw - (x - initial.mx),
          });
          setPosition({
            x: x - relativePos.x,
            y: y - relativePos.y,
          });
          break;
        default:
          break;
      }
      if (isDown === false) {
        setIsResizing(-1);
        document.body.style.cursor = "";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDown, x, y]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none hover:bg-lime-200/20"
      style={style}
      {...props}
    >
      {handleStyles.map((h, i) => (
        <div
          key={i}
          className={`absolute pointer-events-auto cursor-${h.cursor}`}
          style={h.style}
          onMouseDown={() => {
            setInitial({mx: x, my: y, bh: size.height, bw: size.width});
            setIsResizing(i);
            document.body.style.cursor = h.cursor;
          }}
        />
      ))}
    </div>
  );
};

export default ResizeBox;
