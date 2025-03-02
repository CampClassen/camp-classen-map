import React, {ReactElement, ReactNode} from "react";
import Overlay from "@/app/overlay/Overlay";
import {FaXmark} from "react-icons/fa6";
import {Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import './Zoom.css'
import Image from "next/image";

export default function Modal({photos, title = "", description, handleClose}: {photos?: string[], title?: string, description: ReactElement, handleClose: () => void}) {
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

    return (
        <Overlay displayExit={false} handleClose={handleClose}>
            <div className="font-cachet-pro-book bg-white flex flex-col rounded-lg
                max-h-[90vh] w-full max-w-[800px] min-w-[450px] select-text">

                <div className="font-cachet-pro-bold top-0 flex flex-row text-white bg-teal p-2 text-3xl rounded-t sticky z-30">
                    <div className={"m-auto"}>{title}</div>
                    <FaXmark size="34px" className="absolute cursor-pointer right-2" onClick={handleClose} />
                </div>

                <div className={"flex-grow relative max-h-full overflow-auto"}>
                    <Carousel setApi={setApi} className={"m-4 mb-0 select-none"}>
                        {count > 1 &&
                            <>
                                {current != 1 && <CarouselPrevious className={"z-10 absolute left-2 top-1/2"} />}
                                {current != count && <CarouselNext className={"z-10 absolute right-2 top-1/2"} />}
                            </>
                        }

                        <CarouselContent className={""}>
                            {photos && photos.map((photo, index) => (
                                <CarouselItem key={index}>
                                    <Image src={photo} alt={"Carousel Image"} width={6000} height={4000} quality={50}/>
                                    {/*<Zoom>*/}
                                    {/*</Zoom>*/}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div className="my-1.5 text-center text-md text-muted-foreground">
                        {current} of {count}
                    </div>

                    <hr className="mx-3 h-0.5 border-t-0 bg-gray-200"/>

                    <div className="font-cachet-pro-book py-1 px-3">
                        {description}
                    </div>
                </div>
            </div>
        </Overlay>
    )
}