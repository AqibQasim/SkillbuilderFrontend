import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import HEX_DATA from "../data/countries_hex_data.json";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function InstructorGlobe() {
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

  // Gen random data
  const N = 30;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 7 + Math.random() * 30,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

  // Countries
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  return (
    <Globe
      // Globe config
      ref={globeRef}
      height={600}
      animateIn={true}
      backgroundColor="rgba(0, 0, 0, 0)"
      globeMaterial={
        new THREE.MeshBasicMaterial({
          color: "#373668",
          transparent: false,
        })
      }
      // polygons
      hexPolygonsData={hex.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.5}
      hexPolygonColor={useCallback(() => "white", [])}
      // Variant
      htmlElementsData={gData}
      htmlElement={(d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style["pointer-events"] = "auto";
        el.style.cursor = "pointer";
        el.onclick = () => console.info(d);
        return el;
      }}
    />
  );
}

export default InstructorGlobe;
