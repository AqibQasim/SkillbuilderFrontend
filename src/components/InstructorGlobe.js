import { useCallback, useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import HEX_DATA from "../data/countries_hex_data.json";

function CustomGlobe() {
  const [reviews, setReviews] = useState([]);
  const [hex, setHex] = useState({ features: [] });
  const globeEl = useRef(null);

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    setReviews([
      {
        // San Francisco
        lat: 37.7749,
        lng: -122.4194,
        text: "San Francisco: Amazing city with great views!",
      },
      {
        // Paris
        lat: 48.8566,
        lng: 2.3522,
        text: "Paris: Beautiful city with iconic landmarks!",
      },
      {
        // Tokyo
        lat: 35.6895,
        lng: 139.6917,
        text: "Tokyo: A mix of tradition and modernity!",
      },
    ]);
  }, []);

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;
    globeEl.current.pointOfView(
      {
        lat: 37.7749,
        lng: -122.4194,
        altitude: 1.7,
      },
      1000,
    );
  }, []);

  return (
    <div className="wrapper relative !mt-0">
      <div className="pointer-events-none absolute bottom-0 left-0 z-[99] h-28 w-full bg-gradient-to-t from-white"></div>
      <Globe
        ref={globeEl}
        globeMaterial={
          new THREE.MeshBasicMaterial({
            color: "#373668",
            transparent: false,
          })
        }
        atmosphereColor="white"
        atmosphereAltitude="2"
        pointAltitude={3}
        backgroundColor="rgba(0,0,0,0)"
        height={600}
        labelsData={reviews}
        labelText={(d) => d.text}
        labelSize={1.2}
        // labelColor={() => "#4B92E4"}
        labelColor={() => "white"}
        labelDotRadius={0.5}
        labelAltitude={0.02}
        hexPolygonsData={hex.features}
        hexPolygonUseDots={true}
        hexPolygonResolution={3}
        hexPolygonMargin={0.62}
        // hexPolygonColor={useCallback(() => "#5568EF")}
        hexPolygonColor={useCallback(() => "white")}
      />
    </div>
  );
}

export default CustomGlobe;

// function TutorInfoCard({ name, review }) {
//   return (
//     <div className="relative flex flex-col items-center text-center">
//       {/* Pointer */}
//       <div className="border-l-5 border-r-5 border-t-10 mb-2 h-0 w-0 border-transparent border-t-yellow-300"></div>

//       {/* Card Content */}
//       <div className="rounded-lg bg-white p-4 shadow-lg">
//         <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
//         <p className="text-xs text-red-600">{review}</p>
//       </div>
//     </div>
//   );
// }
