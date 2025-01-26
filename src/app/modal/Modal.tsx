import React, {ReactElement, ReactNode} from "react";
import Zoom from 'react-medium-image-zoom'
import Overlay from "@/app/overlay/Overlay";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

import './Zoom.css'
import "./Modal.css";

function ModalDescription({element}: {element: ReactElement}): ReactElement {
    return (
        <div className="modal-description font-cachet-pro-book">
            {element}
        </div>
    );
}

function ModalHeader({title, handleClose}: {title: string, handleClose: () => void}): ReactElement {
    return (
        <div className="modal-header font-cachet-pro-bold">
            <span>{title}</span>
            <span className="modal-close" onClick={handleClose}>&times;</span>
        </div>
    )
}

export default function Modal({children, title, description, handleClose}: {children: ReactNode, title: string, description: ReactElement, handleClose: () => void}) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    const useControls: boolean = React.Children.count(children) != 1;

    return (
        <Overlay displayExit={false} handleClose={handleClose}>
            <div className="modal font-cachet-pro-book">
                <ModalHeader title={title} handleClose={handleClose}/>
                    <Carousel setApi={setApi} className="h-full w-4/5 flex mx-auto">
                        <CarouselContent>
                            {React.Children.map(children, (content: ReactNode, index: number) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="p-4">
                                                <Zoom >
                                                    {content}
                                                </Zoom>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {useControls && <div className="mx-auto">
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </div>}
                    </Carousel>

                <div className="py-1 text-center text-md text-muted-foreground">
                    {current} of {count}
                </div>

                <ModalDescription element={description}/>
            </div>
        </Overlay>
    )
}