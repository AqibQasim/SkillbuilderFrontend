import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import HEX_DATA from "../data/countries_hex_data.json";
import { globeInstructorCardMarkup, markups } from "./GlobeInstructorCard";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function InstructorGlobe() {
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  const gData = [
    {
      lat: 69.834573,
      lng: -46.931788,
      pos: 0,
    },
    {
      lat: 5.42644,
      lng: 23.636377,
      pos: 1,
    },
  ];

  // Countries
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  return (
    <div className="wrapper-globe relative !mt-0">
      {/* <div className="bg-[rgba(255, 255, 255, 0.7)] pointer-events-none absolute inset-0 z-40 !size-full mix-blend-screen"></div> */}
      {/* <div className="pointer-events-none absolute inset-0 z-40 h-[600px] w-full bg-white opacity-55 mix-blend-overlay"></div>   */}
      <Globe
        // Globe config
        ref={globeRef}
        height={650}
        animateIn={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        globeMaterial={
          new THREE.MeshBasicMaterial({
            color: "#373668",
            transparent: false,
          })
        }
        atmosphereColor="#91B4F5"
        atmosphereAltitude="0.20"
        // polygons
        hexPolygonsData={hex.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.5}
        hexPolygonColor={useCallback(() => "white", [])}
        // Variant
        htmlElementsData={gData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          // el.innerHTML = globeInstructorCardMarkup
          el.innerHTML = markups.at(d.pos);
          el.className = "globe-instructor-details";
          el.onclick = () => console.info(d);
          return el;
        }}
      />
    </div>
  );
}

export default InstructorGlobe;
