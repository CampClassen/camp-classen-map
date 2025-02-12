import {Marker} from "react-leaflet";
import {DivIcon, LatLngExpression} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';


function DivHtml({text, size}: {text: string, size: number}) {
    return (
        <div className={`rotate-12 font-cachet-pro-book text-white text-[14px] tracking-wider teal-text-outline `}>
            {text}
        </div>
    );
}

export default function TextLayer({text, latLng, size}: { text: string, latLng: LatLngExpression, size: number }) {
    const icon = new DivIcon({
        className: "",
        html: renderToStaticMarkup(<DivHtml text={text} size={size}/>)
    });


    return (
        <Marker icon={icon} position={latLng} interactive={false}/>
    );
}