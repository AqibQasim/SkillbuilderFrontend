import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import HEX_DATA from "../data/countries_hex_data.json";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

function CustomGlobe() {
  const [reviews, setReviews] = useState([]);
  const [hex, setHex] = useState({ features: [] });

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

  return (
    <div className="globe-container">
      <Globe
        globeMaterial={() => {
          const material = new MeshStandardMaterial({
            color: new Color("#342D5F"), // Set Earth color
            roughness: 6, // Matte surface
          });
          return material;
        }}
        backgroundColor="rgba(0,0,0,0)"
        labelsData={reviews}
        labelText={(d) => d.text}
        labelSize={1.2}
        labelColor={() => "white"}
        labelDotRadius={0.3}
        labelAltitude={0.02}
        hexPolygonsData={hex.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.62}
        hexPolygonColor={useCallback(() => "#5568EF")}
      />
    </div>
  );
}

export default CustomGlobe;
