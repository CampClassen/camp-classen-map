'use client'
import {CircleOptions, LatLngExpression} from "leaflet";
import React, {ReactElement, ReactNode, useState} from "react";
import {Circle, Tooltip} from "react-leaflet";
import "./Layers.css"
import Modal from "@/app/modal/Modal";

export function CircleLayer({photos, name, center, modalDescription = undefined, options}:
    {photos?: string[], name: string, center: LatLngExpression, modalDescription?: ReactElement | undefined, options?: CircleOptions}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const defOptions = {radius: 50, color: "white", weight: 2, dashArray: '6, 6', dashOffset: '10'};

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Circle {...defOptions} {...options} center={center} className={"highlighted"} interactive={modalDescription != undefined}
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

            </Circle>

            {(modalDescription != undefined && isModalOpen) &&
                <Modal title={name} description={modalDescription} handleClose={closeModal} photos={photos}/>
            }
        </>
    );
}