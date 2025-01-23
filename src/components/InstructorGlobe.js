import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HEX_DATA from "../data/countries_hex_data.json";
import { globeArcsData, globeMarkersData } from "../data/globeMarkersData";
import { markups } from "./GlobeInstructorCard";

// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

function InstructorGlobe() {
  const [globeReady, setGlobeReady] = useState(false);
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  // Countries
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }
    globeRef.current.pointOfView(
      {
        lat: globeMarkersData[5].lat + 25,
        lng: globeMarkersData[5].lng - 7,
        altitude: 1.6,
      },
      1,
    );
    globeRef.current.controls().enableZoom = false;
    // Auto-rotate
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1;
  }, [globeReady]);

  return (
    <div className="wrapper-globe relative !mt-0">
      {/* <div className="bg-[rgba(255, 255, 255, 0.7)] pointer-events-none absolute inset-0 z-40 !size-full mix-blend-screen"></div> */}
      {/* <div className="pointer-events-none absolute inset-0 z-40 h-[600px] w-full bg-white opacity-55 mix-blend-overlay"></div>   */}
      <Globe
        // Globe config
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
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
        htmlElementsData={globeMarkersData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          if (d.tutor) {
            console.log("TUTOR TIMES:", d.pos);
            el.innerHTML = markups.at(d.pos);
            el.className = "globe-instructor-details";
            el.onclick = () => console.info(d);
          } else if (!d.tutor) {
            console.log("StudentTIMES");
            el.innerHTML = `<div> </div>`;
            el.className = "globe-student-details";
            el.style.backgroundColor = d.bgColor;
          }
          return el;
        }}
        htmlAltitude={(d) => {
          if (d?.tutor) return 0.2;
          return 0;
        }}
        // Arcs Data
        arcsData={globeArcsData}
        arcColor={"color"}
        arcDashLength={1}
        arcAltitude={0}
      />
    </div>
  );
}

export default InstructorGlobe;
