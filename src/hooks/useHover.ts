import {useRef, useState, useEffect} from "react";

export function useHover<T extends HTMLElement = HTMLElement>(
  externalRef?: React.RefObject<T | null>
): {
  ref: React.RefObject<T | null>;
  hovered: boolean;
  relativePos: {x: number; y: number} | null;
} {
  const internalRef = useRef<T>(null);
  const ref = externalRef || internalRef;
  const [hovered, setHovered] = useState(false);
  const [relativePos, setRelativePos] = useState<{x: number; y: number} | null>(
    null
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleEnter = () => setHovered(true);
    const handleLeave = () => {
      setHovered(false);
    };
    const handleMouseDown = (e: MouseEvent) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      setRelativePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);
    node.addEventListener("mousedown", handleMouseDown);
    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
      node.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref]);

  return {ref, hovered, relativePos};
}
