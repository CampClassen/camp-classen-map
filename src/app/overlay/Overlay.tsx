import React, {ReactNode} from "react";
import {createPortal} from "react-dom";

export default function Overlay({children, displayExit, handleClose}: {children: ReactNode, displayExit: boolean, handleClose: () => void}) {
    return createPortal(
        <div className="absolute top-0 left-0 w-full h-full flex bg-opacity-80 bg-black p-16" onClick={(event) => {
            if (event.target === event.currentTarget)
                handleClose();
        }}>
            {displayExit && <div className="absolute -top-2.5 right-2.5 cursor-pointer text-7xl text-white font-cachet-pro-bold" onClick={handleClose}>&times;</div>}

            <div className={"mx-auto"}>
                {children}
            </div>
        </div>
        , document.querySelector(".overlay-map-portal")!
    );
}