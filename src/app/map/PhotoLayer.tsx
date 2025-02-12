'use client'
import L, {LatLng, LatLngBoundsExpression, LatLngExpression} from "leaflet";
import React, {useState} from "react";
import {ImageOverlay} from "react-leaflet";
import "./Layers.css"
import Overlay from "@/app/overlay/Overlay";
import Image from "next/image";


export function PhotoLayer({center, photo, scale = 15}: {center: LatLngExpression, photo: string, scale?: number}) {
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);

    const latLng: LatLng = L.latLng(center);
    const bounds: LatLngBoundsExpression = [[latLng.lat - scale, latLng.lng - scale], [latLng.lat + scale, latLng.lng + scale]]

    return (
        <>
            <ImageOverlay className={"highlighted"} url={"camera.png"} bounds={bounds} interactive={true}
                          eventHandlers={
                              {
                                  click: () => {
                                      setIsPhotoOpen(true);
                                  }
                              }
                          }>
            </ImageOverlay>

            {isPhotoOpen && (
                <Overlay displayExit={true} handleClose={() => {setIsPhotoOpen(false)}}>
                    <img className="w-full mx-auto max-w-[90vw] max-h-[90vh]" src={photo} alt="Photo"/>
                </Overlay>
            )}
        </>
    )
}