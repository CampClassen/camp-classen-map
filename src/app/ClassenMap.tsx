'use client'

import React, {ReactElement} from "react";
import Map from "@/app/map/Map";
import {StructureLayer} from "@/app/map/StructureLayer";
import {PhotoLayer} from "@/app/map/PhotoLayer";
import {CircleLayer} from "@/app/map/ShapeLayer";
import TextLayer from "@/app/map/TextLayer";

export default function ClassenMap(): ReactElement {
    const shortCabin: string[] = [
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJs89Z5yvjMd18XbZTBfeSVG3JwxrFhDH5QioN",
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJFhrxmpd8N9SgBhzauKMlepRfUtLnVwqYC3v7",
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJgHsGQ7hleWgHGsKwlcYALVO28BIJf5E1hDma"
    ];
    const longCabin: string[] = [
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJMSpAQ5ir9A0dWx3Ik6h2zGnsiVgPwE5jmaHq",
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJfiKNGT8ErY0a1JCux5LP3DbXmNWvAcoSUjyV",
        "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ5gp3b6umKsdXoG7tHi8IYMgJLQuxUA6BVSq0"
    ];

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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJcYBqqJapak4ILsF2rVygxRM7ZUbqEYe0mnh5",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJbXA8SVU8gcsRMqXipYZVB9D4m6fCt3rkWun7",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJXQ0tNqMv47LGowhmF2X8EqfZxpYCzciOBdNt",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJHsvTp6aQNqt2GCT3JirbYkgolSF1UxvK870Q",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJEhftIhCHAwbPdDkusgRyTp4rjZLvOMf5l8Sz",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJXSdlW2Mv47LGowhmF2X8EqfZxpYCzciOBdNt",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ40oQhgKR9YTjZtOH0wNln3euUAvkJBgcKda8",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJXo2vFWVMv47LGowhmF2X8EqfZxpYCzciOBdN",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJUSi8vm5AunTEcDlYO7sNZyQoJ65v1AdPVax0",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJPOmDJQ5UIED5OFjxXN63hYG2Sd4gJMsi9Clu",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJBfUjrVvJjgDp5HZEXUIO67qJMoYyBGTV4n2z",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJE59KIYHAwbPdDkusgRyTp4rjZLvOMf5l8Szc",
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJqjg4r48piQ2wR9gGAjsWOSu4Z1nmvf8LE7HY",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJll6ML1EfqjNBECAKxhTDrag8L9F3S0k1ZQG7",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJzlt609ZMyZ9qhnN5TCKQ1IBH8Op3dgRsJVPX",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJhlDeG4s5CmUutyPMDvekQNBOsA96TGE3afIr",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJiLEE0Foti5nkzpOdb6XDAsrgQN7fuLmT3hYJ",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJHWcpSEQNqt2GCT3JirbYkgolSF1UxvK870Qh",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJlhI3FTEfqjNBECAKxhTDrag8L9F3S0k1ZQG7",
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJmmRLJ4YR5Er3GSPJUiNO6QnYX7yLvf9ukWx2",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJUryndLAunTEcDlYO7sNZyQoJ65v1AdPVax0S",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ9MKZ2KexoQcJ218Ea4pbAqtVKInugLUyrBRO",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ9mnbKHexoQcJ218Ea4pbAqtVKInugLUyrBRO"
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
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJwEm7P3fdV53xsQL2TaNUcvFeqHbW0kZnSyo8"]}
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJew45Gcgb5krzfEXsRVLJaF3m8YojTHq2MWhC",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJxzNvjOFUjyqzLXtZQWadIE83iNPMFwYmDuBg",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJHaP6FMQNqt2GCT3JirbYkgolSF1UxvK870Qh",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJJS678XwCVmZRL0WtYUoKbc9ATfd2qOXJgBG1",
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJuFKR7kBPI0rXTlKU1YmRitb2og7BMvHdz5eE",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJajxBSM1k5qRci6P9VojgEwz4xKlMXb1GYuOW",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJBiF7gdJjgDp5HZEXUIO67qJMoYyBGTV4n2zh",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJQe18DhAhzdRQJNLylDU0I1m4XogbiTcGV9eE",
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJF9l8XDd8N9SgBhzauKMlepRfUtLnVwqYC3v7",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJISxMeNXEoiKwDsgazxZh9Hl5XvejcSdMAnO3",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJtjX9CS2jPz1Uu5G97IXwpT8SgdqyxeB6bAMC",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJOwUuuycNRBGPLpbekErm5xzj1ynsfJ0HiwT8"
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
                name={"Chapel"}
                image="structures/chapel.svg"
                bounds={[
                    [2127.389353454509, 2098.669906484496],
                    [2265.233156054153, 2242.2572008591255],
                ]}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ2KKiTCEDP8qYAT5NnOMSE9LXWl36ZQD1HwKi",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJPpHex5UIED5OFjxXN63hYG2Sd4gJMsi9CluZ"
                ]}
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJzFYwjdvZMyZ9qhnN5TCKQ1IBH8Op3dgRsJVP",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ4qui3yKR9YTjZtOH0wNln3euUAvkJBgcKda8",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ4GJyNZKR9YTjZtOH0wNln3euUAvkJBgcKda8",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJbcXgvdU8gcsRMqXipYZVB9D4m6fCt3rkWun7",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ6yUs5g9rJxhtBDdIyOLnklX1fjNgeHA6sUuR",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJNTEeLg71DEfSQznjGP5C0iompYvyAIHr8gaJ",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJeEhCqe5gb5krzfEXsRVLJaF3m8YojTHq2MWh",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJfH7xQ98ErY0a1JCux5LP3DbXmNWvAcoSUjyV"
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJW1gE1VzvUr6KJCO3S547EQZ9AIgzahHpbVWy",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ0nE2QxT42dWpxOTCk3nZXHcJjgz5wMPleD0h",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ6Q0QYJ9rJxhtBDdIyOLnklX1fjNgeHA6sUuR",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJq5nyA5piQ2wR9gGAjsWOSu4Z1nmvf8LE7HYy",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJUwLPZUAunTEcDlYO7sNZyQoJ65v1AdPVax0S"
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
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJTtxehRBNPbspndG6FBkmifqezISN0v1yY9gQ",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJfsjZLt8ErY0a1JCux5LP3DbXmNWvAcoSUjyV",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJDcyiVm47DxNR5nVkurg4h6OioaA18q9fYUXH"
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
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJMcJK5lir9A0dWx3Ik6h2zGnsiVgPwE5jmaHq"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Baird"}
                image="structures/baird.svg"
                bounds={[
                    [2000.3386828053096, 1079.3349303005318],
                    [2047.6592488980602, 1136.3347030940718],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJELOGP8HAwbPdDkusgRyTp4rjZLvOMf5l8Szc"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Bragg"}
                image="structures/bragg.svg"
                bounds={[
                    [1966.6033944269311, 1013.1688425750472],
                    [2005.6591384968303, 1069.4550619699019],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJeEv8v2Sgb5krzfEXsRVLJaF3m8YojTHq2MWh"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Rose"}
                image="structures/rose.svg"
                bounds={[
                    [1935.556728170004, 924.7024291746282],
                    [1990.6942492098617, 980.9886485694828],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJFC4shKd8N9SgBhzauKMlepRfUtLnVwqYC3v7"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Fain"}
                image="structures/fain.svg"
                bounds={[
                    [1960.8155469261897, 843.1425653517042],
                    [1999.8712909960889, 899.428784746559],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJPTGaXR5UIED5OFjxXN63hYG2Sd4gJMsi9Clu"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Earp"}
                image="structures/earp.svg"
                bounds={[
                    [2075.774989952674, 829.3907050169897],
                    [2128.6151142825374, 883.3795277018505],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJgH8VQCleWgHGsKwlcYALVO28BIJf5E1hDmat"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Avey"}
                image="structures/avey.svg"
                bounds={[
                    [1914.8774695542538, 778.817822557343],
                    [1963.1228004641293, 837.4014386621917],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJEdFcNBHAwbPdDkusgRyTp4rjZLvOMf5l8Szc"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Davis"}
                image="structures/davis.svg"
                bounds={[
                    [2010.9264533972398, 915.7393633238217],
                    [2086.138404311295, 1016.0219645425618],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJG6fjMMW1MnQ5WGJKPbfAwhameR7gz2OlS86C"].concat(longCabin)}
            />
            <StructureLayer
                name={"Peck"}
                image="structures/peck.svg"
                bounds={[
                    [2071.9709490680625, 1038.2645105957693],
                    [2106.8324300978015, 1080.7045744580605],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ5JUgB8eumKsdXoG7tHi8IYMgJLQuxUA6BVSq"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Smith"}
                image="structures/smith.svg"
                bounds={[
                    [1842.5193300173867, 1144.1055043258282],
                    [1895.3594543472502, 1171.6742648457569],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJE5eyxcHAwbPdDkusgRyTp4rjZLvOMf5l8Szc"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Laughlin"}
                image="structures/laughlin.svg"
                bounds={[
                    [1795.4132886721964, 1202.6866708778657],
                    [1837.9151278070865, 1244.039811657759],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJXoiCBVlMv47LGowhmF2X8EqfZxpYCzciOBdN"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Everest"}
                image="structures/everest.svg"
                bounds={[
                    [1785.074555439589, 1075.182251548593],
                    [1818.386807734503, 1118.8327890384803],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJbn5kLGU8gcsRMqXipYZVB9D4m6fCt3rkWun7"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Sohlberg"}
                image="structures/sohlberg.svg"
                bounds={[
                    [1687.4320590014038, 1122.2800666462076],
                    [1741.4208816862642, 1161.3358107161068],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJdn9KHoOq8YanlN5PeBEroct47D2jyQbVHxUA"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Browne"}
                image="structures/browne.svg"
                bounds={[
                    [1691.6070829704784, 1006.7841478097481],
                    [1743.0678914906212, 1055.6059405083452],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ4gkhhkKR9YTjZtOH0wNln3euUAvkJBgcKda8"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Buttram"}
                image="structures/buttram.svg"
                bounds={[
                    [1772.0944922271597, 889.3454210361537],
                    [1806.401697907255, 938.1672137347507],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ47uVZoKR9YTjZtOH0wNln3euUAvkJBgcKda8"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Prichard"}
                image="structures/prichard.svg"
                bounds={[
                    [1652.200863718753, 831.340413617601],
                    [1689.147085220394, 872.2451588515607],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJfbCaDQg8ErY0a1JCux5LP3DbXmNWvAcoSUjy"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Heidbrink"}
                image="structures/heidbrink.svg"
                bounds={[
                    [1743.046856783654, 803.3263251355569],
                    [1787.0026372124555, 844.2506724313376],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJeafz7sgb5krzfEXsRVLJaF3m8YojTHq2MWhC"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Ricks"}
                image="structures/ricks.svg"
                bounds={[
                    [1637.510346589348, 713.8538767556283],
                    [1708.7637737710843, 794.3438593127748],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ8Ur6TjbyRidWzlOoVmgPkj9Tp1Yf7rxNIvnE"].concat(longCabin)}
            />
            <StructureLayer
                name={"Clements"}
                image="structures/clements.svg"
                bounds={[
                    [1686.955293606331, 674.4948751950172],
                    [1732.426790601643, 716.9349390573084],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJTfHxK2NPbspndG6FBkmifqezISN0v1yY9gQK"].concat(shortCabin)}
            />
            <StructureLayer
                name={"Shdeed Godfrey Hayes"}
                image="structures/sgh.svg"
                bounds={[
                    [1766.6922454961991, 655.9115753415908],
                    [1832.1680517310301, 701.8595095414722],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ5J8FpWOumKsdXoG7tHi8IYMgJLQuxUA6BVSq"].concat(longCabin)}
            />
            <StructureLayer
                name={"Farris"}
                image="structures/farris.svg"
                bounds={[
                    [1863.1855955417536, 703.0017883787574],
                    [1912.579624806626, 746.6523258686448],
                ]}
                modalDescription={<></>}
                photos={["https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJFAkeGcd8N9SgBhzauKMlepRfUtLnVwqYC3v7"].concat(shortCabin)}
            />
            <PhotoLayer center={[1623.666981, 1776.329968]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJUZxHthAunTEcDlYO7sNZyQoJ65v1AdPVax0S" />
            <PhotoLayer center={[197.768033, 2096.241811]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJRu369SgPCIFvpfzkDTS4XcogMjnWHtBd2EmO" />
            <PhotoLayer center={[1520.7971691443847,1690.38750736851]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJso55QzvjMd18XbZTBfeSVG3JwxrFhDH5QioN" />
            <PhotoLayer center={[2032.7742997825133,1456.068920336811]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJc3bXLFapak4ILsF2rVygxRM7ZUbqEYe0mnh5" />
            <PhotoLayer center={[1596.1576636844918,889.7840042335395]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJIpeJqCXEoiKwDsgazxZh9Hl5XvejcSdMAnO3" />
            <PhotoLayer center={[2113.1002886053975,1401.2545065550912]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJDjqvUl47DxNR5nVkurg4h6OioaA18q9fYUXH" />
            <PhotoLayer center={[1478.0546845313136,1589.612826702765]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ9KnVxjexoQcJ218Ea4pbAqtVKInugLUyrBRO" />
            <PhotoLayer center={[1395.7248271353194,657.0862575601491]} photo="https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJgfoIiOleWgHGsKwlcYALVO28BIJf5E1hDmat" />

            <CircleLayer
                name={"Kings Ridge"}
                center={[884.943008, 1392.852211]}
                options={{ radius: 50 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJhMC1V4s5CmUutyPMDvekQNBOsA96TGE3afIr",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJWX94bPzvUr6KJCO3S547EQZ9AIgzahHpbVWy",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJsPuayu2vjMd18XbZTBfeSVG3JwxrFhDH5Qio",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ6B8S7V9rJxhtBDdIyOLnklX1fjNgeHA6sUuR"
                ]}
            />
            <CircleLayer
                name={"Tomahawk Range"}
                center={[491.951804, 1972.238865]}
                options={{ radius: 65 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJM0GR3Irir9A0dWx3Ik6h2zGnsiVgPwE5jmaH",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJtU3r7O2jPz1Uu5G97IXwpT8SgdqyxeB6bAMC",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJaaCWnu1k5qRci6P9VojgEwz4xKlMXb1GYuOW"
                ]}
            />
            <CircleLayer
                name={"Princess Point Chapel"}
                center={[1896.387455, 2745.554758]}
                options={{ radius: 55 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJGesoXOW1MnQ5WGJKPbfAwhameR7gz2OlS86C",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJPjR3fb5UIED5OFjxXN63hYG2Sd4gJMsi9Clu",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJ7Dagq6dtTMlhvYZdLsnBtajH04cu9GRoefEk"
                ]}
            />
            <CircleLayer
                name={"Ataltl Range"}
                center={[1157.40127, 2366.28324]}
                options={{ radius: 40 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJQPFUwGhAhzdRQJNLylDU0I1m4XogbiTcGV9e"
                ]}
            />
            <CircleLayer
                name={"Rock Climbing Wall"}
                center={[1087.071937400049,1444.6203121896795]}
                options={{ radius: 30 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJNlq4RI71DEfSQznjGP5C0iompYvyAIHr8gaJ",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJeXH8mKgb5krzfEXsRVLJaF3m8YojTHq2MWhC"
                ]}
            />
            <CircleLayer
                name={"Activity Field"}
                center={[1579.301161441783,1488.7265331145948]}
                options={{ radius: 65 }}
                modalDescription={<></>}
                photos={[
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJDquD2J47DxNR5nVkurg4h6OioaA18q9fYUXH",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJc5qdARapak4ILsF2rVygxRM7ZUbqEYe0mnh5",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJgH8vwEOleWgHGsKwlcYALVO28BIJf5E1hDma",
                    "https://kfy3ovuc9l.ufs.sh/f/9vjrt1exoQcJgHyj6LgleWgHGsKwlcYALVO28BIJf5E1hDma"
                ]}
            />
        </Map>
    );
}