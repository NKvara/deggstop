const borderThickness = 4;

export const handleStyles = [
  // Top border
  {
    style: {
      top: 0,
      left: borderThickness,
      right: borderThickness,
      height: borderThickness,
    },
    cursor: "ns-resize",
  },
  // Top Right corner
  {
    style: {
      top: 0,
      right: 0,
      width: borderThickness * 4,
      height: borderThickness * 4,
    },
    cursor: "nesw-resize",
  },
  // Right border
  {
    style: {
      top: borderThickness,
      right: 0,
      bottom: borderThickness,
      width: borderThickness,
    },
    cursor: "ew-resize",
  },
  // Bottom Right corner
  {
    style: {
      bottom: 0,
      right: 0,
      width: borderThickness * 4,
      height: borderThickness * 4,
    },
    cursor: "nwse-resize",
  },
  // Bottom border
  {
    style: {
      left: borderThickness,
      right: borderThickness,
      bottom: 0,
      height: borderThickness,
    },
    cursor: "ns-resize",
  },
  // Bottom Left corner
  {
    style: {
      bottom: 0,
      left: 0,
      width: borderThickness * 4,
      height: borderThickness * 4,
    },
    cursor: "nesw-resize",
  },
  // Left border
  {
    style: {
      top: borderThickness,
      left: 0,
      bottom: borderThickness,
      width: borderThickness,
    },
    cursor: "ew-resize",
  },
  // Top Left corner
  {
    style: {
      top: 0,
      left: 0,
      width: borderThickness * 4,
      height: borderThickness * 4,
    },
    cursor: "nwse-resize",
  },
];
