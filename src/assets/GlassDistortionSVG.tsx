// SVG filter for liquid glass effect. Place this in your React app, e.g. in App.tsx or index.html.
// You can import and render this component once at the root of your app.

const GlassDistortionSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0"
    height="0"
    style={{position: "absolute", overflow: "hidden"}}
  >
    <defs>
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves="2"
          seed="200"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale="40"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

export default GlassDistortionSVG;
