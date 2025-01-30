'use client'
import {LatLngBoundsExpression} from "leaflet";
import React, {ReactElement, ReactNode, useState} from "react";
import {ImageOverlay, Tooltip} from "react-leaflet";
import "./Layers.css"
import Modal from "@/app/modal/Modal";

export function StructureLayer({photos, name, image, bounds, modalDescription = undefined}:
    {photos?: string[], name: string, image: string, bounds: LatLngBoundsExpression, modalDescription?: ReactElement | undefined}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ImageOverlay className={"highlighted"} url={image} bounds={bounds} interactive={modalDescription != undefined }
                eventHandlers={
                {
                    click: () => {
                        openModal()
                    }
                }
            }>
                {modalDescription != undefined  &&
                    <Tooltip className={"tooltip"} direction={"center"} permanent={false}>
                        {name}
                    </Tooltip>
                }
            </ImageOverlay>

            {(modalDescription != undefined && isModalOpen) &&
                <Modal title={name} description={modalDescription} handleClose={closeModal} photos={photos}/>
            }
        </>
    );
}