import "./Overlay.css";
import React, {ReactNode} from "react";
import {createPortal} from "react-dom";

export default function Overlay({children, displayExit, handleClose}: {children: ReactNode, displayExit: boolean, handleClose: () => void}) {
    return createPortal(
        <div className="overlay p-16" onClick={(event) => {
            if (event.target === event.currentTarget)
                handleClose();
        }}>
            {displayExit && <div className="overlay-close font-cachet-pro-bold" onClick={handleClose}>&times;</div>}

            {children}
        </div>
        , document.querySelector(".overlay-map-portal")!
    );
}