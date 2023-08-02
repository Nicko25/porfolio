import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [50.0, 10.0, 0],
        center: [-5, -3],
        scale: 350
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="darkgray"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-58.3815, -35.6037]}
        dx={60}
        dy={20}
        connectorProps={{
          stroke: "lightgray",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="134" y="10" fontWeight="8px" textAnchor="end" alignmentBaseline="middle" fill="lightgray">
          {"Buenos Aires, Argentina"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
