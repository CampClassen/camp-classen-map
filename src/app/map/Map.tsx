'use client'
import 'leaflet/dist/leaflet.css';
import React, {ReactNode} from "react";
import {ImageOverlay, MapContainer} from "react-leaflet";
import {CRS, svg} from "leaflet";

export default function Map({children}: {children: ReactNode}): ReactNode {
    const mapStyle: React.CSSProperties = {
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        zIndex: 0,
        userSelect: "none",
    };

    return (
        <>
            <MapContainer style={mapStyle} crs={CRS.Simple} renderer={svg()} zoomSnap={0.20} minZoom={-2} maxZoom={2.6}
                          zoom={-1.8} center={[1536, 2048]} attributionControl={false}>
                <ImageOverlay url={"camp-classen-map/background.png"} bounds={[[0, 0], [3072, 4096]]}></ImageOverlay>
                {children}
            </MapContainer>
            <div className="overlay-map-portal"/>
        </>
        )
}

