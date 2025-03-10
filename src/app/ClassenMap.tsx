'use client'

import React, {ReactElement} from "react";
import Map from "@/app/map/Map";
import {StructureLayer} from "@/app/map/StructureLayer";
import {PhotoLayer} from "@/app/map/PhotoLayer";
import {CircleLayer} from "@/app/map/ShapeLayer";
import TextLayer from "@/app/map/TextLayer";

export default function ClassenMap(): ReactElement {
    const shortCabin: string[] = ["cabins/short/1.jpg", "cabins/short/2.jpg", "cabins/short/3.jpg"];
    const longCabin: string[] = ["cabins/long/1.jpg", "cabins/long/2.jpg", "cabins/long/3.jpg"];

    return (
        <Map>
            <StructureLayer
                name={"Activity Center"}
                image="structures/activity-center.svg"
                bounds={[
                    [1999.054484820935, 1456.733117600812],
                    [2170.590513221411, 1671.8129070567936],
                ]}
                modalDescription={<></>}
                photos={[
                    "activity-center/1.jpg",
                    "activity-center/main/1.jpg",
                    "activity-center/main/2.jpg",
                    "activity-center/main/3.jpg",
                    "activity-center/common/1.jpg",
                    "activity-center/common/2.jpg",
                    "activity-center/bunk/1.jpg",
                    "activity-center/bunk/2.jpg",
                    "activity-center/bunk/3.jpg",
                    "activity-center/bathroom/1.jpg",
                    "activity-center/bathroom/2.jpg",
                    "activity-center/bathroom/3.jpg",
                ]}
            />
            <StructureLayer
                name={"Dining Hall"}
                image="structures/dining-hall.svg"
                bounds={[
                    [1873.4256762068521, 1211.0573180328752],
                    [1979.52583586258, 1347.471809018811],
                ]}
                modalDescription={<></>}
                photos={[
                    "dining-hall/1.jpg",
                    "dining-hall/2.jpg",
                    "dining-hall/3.jpg",
                    "dining-hall/4.jpg",
                    "dining-hall/5.jpg",
                    "dining-hall/6.jpg",
                    "dining-hall/7.jpg",
                ]}
            />
            <StructureLayer
                name={"Woodshed"}
                image="structures/woodshed.svg"
                bounds={[
                    [953.419634647539, 2152.6613799628058],
                    [1006.2597589774027, 2249.152041782557],
                ]}
            />
            <StructureLayer
                name={"House 1"}
                image="structures/house-1.svg"
                bounds={[
                    [906.3985067732181, 1988.6201352616424],
                    [1017.0458161284772, 2071.984546419714],
                ]}
            />
            <StructureLayer
                name={"Waterfront"}
                image="structures/waterfront.svg"
                bounds={[
                    [1791.5930592634236, 1803.7820227281773],
                    [1899.541329112143, 1930.8824049694115],
                ]}
                modalDescription={<></>}
                photos={[
                    "waterfront/1.jpg",
                    "waterfront/2.jpg",
                    "waterfront/3.jpg",
                    "waterfront/4.jpg"
                ]}
            />
            <StructureLayer
                name={"Swim Dock"}
                image="structures/swim-dock.svg"
                bounds={[
                    [1661.8032813870188, 1876.6623936839155],
                    [1816.9167695442934, 2056.4830423622016],
                ]}
            />
            <StructureLayer
                name={"Lake Tower"}
                image="structures/lake-tower.svg"
                bounds={[
                    [1591.3012002313224, 1996.3404278274206],
                    [1703.1656819001741, 2066.6142688758023],
                ]}
                modalDescription={<></>}
                photos={["photos/lake-tower.jpg"]}
            />
            <StructureLayer
                name={"Archery"}
                image="structures/archery.svg"
                bounds={[
                    [1251.981883937589, 1309.5786762471182],
                    [1336.8620116621712, 1374.7544886070655],
                ]}
                modalDescription={<></>}
                photos={[
                    "archery/1.jpg",
                    "archery/2.jpg",
                    "archery/3.jpg",
                    "archery/4.jpg",
                ]}
            />
            <StructureLayer
                name={"Rifle Range"}
                image="structures/rifle-range.svg"
                bounds={[
                    [1157.0763258366428, 2447.953448365695],
                    [1268.070180579994, 2547.8479176347114],
                ]}
                modalDescription={<></>}
                photos={[
                    "riflery/1.jpg",
                    "riflery/2.jpg",
                    "riflery/3.jpg",
                    "riflery/4.jpg",
                ]}
            />
            <StructureLayer
                name={"Vehicle Shed"}
                image="structures/vehicle_shed.svg"
                bounds={[
                    [1456.5495141362403, 1718.4525734009737],
                    [1503.646146691119, 1798.8614582507662],
                ]}
            />
            <StructureLayer
                name={"House 2"}
                image="structures/house-2.svg"
                bounds={[
                    [1307.6323395759382, 1719.318998047211],
                    [1419.7905119916343, 1781.3358698535371],
                ]}
            />
            <StructureLayer
                name={"Main Lodge"}
                image="structures/lodge.svg"
                bounds={[
                    [1495.0024629056893, 1811.6841711810541],
                    [1640.1483330907076, 1873.7010429873803],
                ]}
                modalDescription={
                    <>
                        <h1 className={"text-4xl text-center font-cachet-pro-bold"}>Camp Classen Main Lodge</h1>
                    </>
                }

                photos={[
                    "main-lodge/1.jpg",
                    "main-lodge/2.jpg",
                    "main-lodge/3.jpg",
                    "main-lodge/4.jpg"
                ]}
            />
            <StructureLayer
                name={"Infirmary"}
                image="structures/infirmary.svg"
                bounds={[
                    [1939.002823234995, 1432.427180030484],
                    [1974.6124722399031, 1489.8620977803357],
                ]}
            />
            <StructureLayer
                name={"Flag"}
                image="structures/flag.svg"
                bounds={[
                    [1857.4452400302057, 1317.553534015197],
                    [2019.4117080847875, 1374.9884517650487],
                ]}
            />
            <StructureLayer
                name={"Flag"}
                image="structures/flag.svg"
                bounds={[
                    [1857.4452400302057, 1317.553534015197],
                    [2019.4117080847875, 1374.9884517650487],
                ]}
            />
            <StructureLayer
                name={"Chapel"}
                image="structures/chapel.svg"
                bounds={[
                    [2127.389353454509, 2098.669906484496],
                    [2265.233156054153, 2242.2572008591255],
                ]}
                modalDescription={<></>}
                photos={["chapel/1.jpg", "chapel/2.jpg"]}
            />
            <StructureLayer
                name={"Nature Center"}
                image="structures/nature-center.svg"
                bounds={[
                    [1397.490674322587, 748.7622349846732],
                    [1585.4395285698765, 924.5853566998794],
                ]}
                modalDescription={<></>}
                photos={[
                    "nature-center/1.jpg",
                    "nature-center/2.jpg",
                    "nature-center/3.jpg",
                    "nature-center/4.jpg",
                    "nature-center/5.jpg",
                    "nature-center/6.jpg",
                    "nature-center/7.jpg",
                    "nature-center/8.jpg"
                ]}
            />
            <StructureLayer
                name={"Shower House"}
                image="structures/showerhouse.svg"
                bounds={[
                    [1844.6720592605063, 993.5886955714706],
                    [1929.1205655499716, 1111.0248996302582],
                ]}
                modalDescription={<></>}
                photos={[
                    "shower-house/1.jpg",
                    "shower-house/2.jpg",
                    "shower-house/3.jpg",
                    "shower-house/4.jpg",
                    "shower-house/5.jpg"
                ]}
            />
            <StructureLayer
                name={"Fishing Dock"}
                image="structures/fishing-dock.svg"
                bounds={[
                    [1384.1637984007662, 1905.3690425358],
                    [1510.836557834964, 2045.2368810777268],
                ]}
            />
            <StructureLayer
                name={"Poorboy"}
                image="structures/poorboy.svg"
                bounds={[
                    [1835.619971285262, 1455.4026382017396],
                    [1878.1218104201523, 1524.3245395015617],
                ]}
                modalDescription={<></>}
                photos={[
                    "cabins/poorboy/1.jpg",
                    "cabins/poorboy/2.jpg"
                ]}
            />
            <StructureLayer
                name={"Anthony"}
                image="structures/anthony.svg"
                bounds={[
                    [1686.3751474005348, 1193.4443970085022],
                    [1735.7691766654073, 1237.0949344983896],
                ]}
                modalDescription={<></>}
                photos={["cabins/anthony.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Baird"}
                image="structures/baird.svg"
                bounds={[
                    [2000.3386828053096, 1079.3349303005318],
                    [2047.6592488980602, 1136.3347030940718],
                ]}
                modalDescription={<></>}
                photos={["cabins/baird.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Bragg"}
                image="structures/bragg.svg"
                bounds={[
                    [1966.6033944269311, 1013.1688425750472],
                    [2005.6591384968303, 1069.4550619699019],
                ]}
                modalDescription={<></>}
                photos={["cabins/bragg.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Rose"}
                image="structures/rose.svg"
                bounds={[
                    [1935.556728170004, 924.7024291746282],
                    [1990.6942492098617, 980.9886485694828],
                ]}
                modalDescription={<></>}
                photos={["cabins/rose.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Fain"}
                image="structures/fain.svg"
                bounds={[
                    [1960.8155469261897, 843.1425653517042],
                    [1999.8712909960889, 899.428784746559],
                ]}
                modalDescription={<></>}
                photos={["cabins/fain.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Earp"}
                image="structures/earp.svg"
                bounds={[
                    [2075.774989952674, 829.3907050169897],
                    [2128.6151142825374, 883.3795277018505],
                ]}
                modalDescription={<></>}
                photos={["cabins/earp.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Avey"}
                image="structures/avey.svg"
                bounds={[
                    [1914.8774695542538, 778.817822557343],
                    [1963.1228004641293, 837.4014386621917],
                ]}
                modalDescription={<></>}
                photos={["cabins/avey.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Davis"}
                image="structures/davis.svg"
                bounds={[
                    [2010.9264533972398, 915.7393633238217],
                    [2086.138404311295, 1016.0219645425618],
                ]}
                modalDescription={<></>}
                photos={["cabins/davis.jpg"].concat(longCabin)}
            />
            <StructureLayer
                name={"Peck"}
                image="structures/peck.svg"
                bounds={[
                    [2071.9709490680625, 1038.2645105957693],
                    [2106.8324300978015, 1080.7045744580605],
                ]}
                modalDescription={<></>}
                photos={["cabins/peck.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Smith"}
                image="structures/smith.svg"
                bounds={[
                    [1842.5193300173867, 1144.1055043258282],
                    [1895.3594543472502, 1171.6742648457569],
                ]}
                modalDescription={<></>}
                photos={["cabins/smith.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Laughlin"}
                image="structures/laughlin.svg"
                bounds={[
                    [1795.4132886721964, 1202.6866708778657],
                    [1837.9151278070865, 1244.039811657759],
                ]}
                modalDescription={<></>}
                photos={["cabins/laughlin.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Everest"}
                image="structures/everest.svg"
                bounds={[
                    [1785.074555439589, 1075.182251548593],
                    [1818.386807734503, 1118.8327890384803],
                ]}
                modalDescription={<></>}
                photos={["cabins/everest.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Sohlberg"}
                image="structures/sohlberg.svg"
                bounds={[
                    [1687.4320590014038, 1122.2800666462076],
                    [1741.4208816862642, 1161.3358107161068],
                ]}
                modalDescription={<></>}
                photos={["cabins/sohlberg.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Browne"}
                image="structures/browne.svg"
                bounds={[
                    [1691.6070829704784, 1006.7841478097481],
                    [1743.0678914906212, 1055.6059405083452],
                ]}
                modalDescription={<></>}
                photos={["cabins/browne.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Buttram"}
                image="structures/buttram.svg"
                bounds={[
                    [1772.0944922271597, 889.3454210361537],
                    [1806.401697907255, 938.1672137347507],
                ]}
                modalDescription={<></>}
                photos={["cabins/buttram.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Prichard"}
                image="structures/prichard.svg"
                bounds={[
                    [1652.200863718753, 831.340413617601],
                    [1689.147085220394, 872.2451588515607],
                ]}
                modalDescription={<></>}
                photos={["cabins/prichard.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Heidbrink"}
                image="structures/heidbrink.svg"
                bounds={[
                    [1743.046856783654, 803.3263251355569],
                    [1787.0026372124555, 844.2506724313376],
                ]}
                modalDescription={<></>}
                photos={["cabins/heidbrink.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Ricks"}
                image="structures/ricks.svg"
                bounds={[
                    [1637.510346589348, 713.8538767556283],
                    [1708.7637737710843, 794.3438593127748],
                ]}
                modalDescription={<></>}
                photos={["cabins/ricks.jpg"].concat(longCabin)}
            />
            <StructureLayer
                name={"Clements"}
                image="structures/clements.svg"
                bounds={[
                    [1686.955293606331, 674.4948751950172],
                    [1732.426790601643, 716.9349390573084],
                ]}
                modalDescription={<></>}
                photos={["cabins/clements.jpg"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Shdeed Godfrey Hayes"}
                image="structures/sgh.svg"
                bounds={[
                    [1766.6922454961991, 655.9115753415908],
                    [1832.1680517310301, 701.8595095414722],
                ]}
                modalDescription={<></>}
                photos={["cabins/sgh.jpg"].concat(longCabin)}
            />
            <StructureLayer
                name={"Farris"}
                image="structures/farris.svg"
                bounds={[
                    [1863.1855955417536, 703.0017883787574],
                    [1912.579624806626, 746.6523258686448],
                ]}
                modalDescription={<></>}
                photos={["cabins/farris.jpg"].concat(shortCabin)}
            />
            <PhotoLayer center={[1623.666981, 1776.329968]} photo="photos/lake-view.jpg" />
            <PhotoLayer center={[197.768033, 2096.241811]} photo="photos/entrance.jpg" />
            <PhotoLayer center={[1520.7971691443847,1690.38750736851]} photo="photos/canoe.jpg" />
            <PhotoLayer center={[2032.7742997825133,1456.068920336811]} photo="photos/ac-bridge.jpg" />
            <PhotoLayer center={[1596.1576636844918,889.7840042335395]} photo="photos/nc-c-bridge.jpg" />
            <PhotoLayer center={[2113.1002886053975,1401.2545065550912]} photo="photos/owls.jpg" />
            <PhotoLayer center={[1478.0546845313136,1589.612826702765]} photo="photos/rock-range.jpg" />
            <PhotoLayer center={[1395.7248271353194,657.0862575601491]} photo="photos/skeet.jpg" />

            <CircleLayer
                name={"Kings Ridge"}
                center={[884.943008, 1392.852211]}
                options={{ radius: 50 }}
                modalDescription={<></>}
                photos={["kings-ridge/1.jpg", "kings-ridge/2.jpg", "kings-ridge/3.jpg", "kings-ridge/4.jpg"]}
            />
            <CircleLayer
                name={"Tomahawk Range"}
                center={[491.951804, 1972.238865]}
                options={{ radius: 65 }}
                modalDescription={<></>}
                photos={["tomahawks/1.jpg", "tomahawks/2.jpg", "tomahawks/3.jpg"]}
            />
            <CircleLayer
                name={"Princess Point Chapel"}
                center={[1896.387455, 2745.554758]}
                options={{ radius: 55 }}
                modalDescription={<></>}
                photos={["princess-point/1.jpg", "princess-point/2.jpg", "princess-point/3.jpg"]}
            />
            <CircleLayer
                name={"Ataltl Range"}
                center={[1157.40127, 2366.28324]}
                options={{ radius: 40 }}
                modalDescription={<></>}
                photos={["atlatl/1.jpg"]}
            />
            <CircleLayer
                name={"Rock Climbing Wall"}
                center={[1087.071937400049,1444.6203121896795]}
                options={{ radius: 30 }}
                modalDescription={<></>}
                photos={["rock-wall/1.jpg", "rock-wall/2.jpg"]}
            />
            <CircleLayer
                name={"Activity Field"}
                center={[1579.301161441783,1488.7265331145948]}
                options={{ radius: 65 }}
                modalDescription={<></>}
                photos={["activity-field/1.jpg", "activity-field/2.jpg", "activity-field/3.jpg", "activity-field/4.jpg"]}
            />
        </Map>
    );
}