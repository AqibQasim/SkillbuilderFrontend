import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import HEX_DATA from "../data/countries_hex_data.json";
import { globeInstructorCardMarkup, markups } from "./GlobeInstructorCard";
import { globeMarkersData } from "../data/globeMarkersData";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function InstructorGlobe() {
  const globeRef = useRef(null);
  const [hex, setHex] = useState({ features: [] });

  console.log("DATA MARKERS", globeMarkersData);

  // const radius = 3;

  // const arcsData = [
  //   {
  //     startLat: -8.206418231550687 - radius,
  //     startLng: -66.04680121804626,
  //     endLat: 5.42644,
  //     endLng: 23.636377,
  //     color: "#fff",
  //   },
  // ];

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
        // htmlElementsData={markersData}
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

          // } else {
          //   el.innerHTML = `<h1>SOMETHING FOR EVERY BODY </h1>`;
          //   el.className = "globe-student-details";
          // }
          return el;
        }}
        htmlAltitude={(d) => {
          if (d?.tutor) return 0.25;
          return 0;
        }}
        // Arcs Data
        // arcsData={arcsData}
        // arcColor={"color"}
        // arcDashLength={1}
        // arcAltitude={0}
      />
    </div>
  );
}

export default InstructorGlobe;
