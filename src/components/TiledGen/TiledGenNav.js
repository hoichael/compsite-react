import { useState, useRef } from "react"

import TiledGenMainMenu from "./TiledGenMainMenu"
import TiledGenAbout from "./TiledGenAbout"
import TiledGenStep1 from "./TiledGenStep1"
import ParsingCanvas from "./TiledGenParsingCanvas"
import TiledGenStep2 from "./TiledGenStep2"
import TiledGenStep3 from "./TiledGenStep3"
import TiledGenDownload from "./TiledGenDownload"

function TiledGenNav( { setInfoObject, infoObject, toggleRefCanvas } ) {

    const [currentLocation, setCurrentLocation] = useState("main");

    let fullTMX = useRef();
    let fullTSX = useRef();


    function initStep2(infoObj) {
        setInfoObject(infoObj.current);
        setCurrentLocation("parsing")
    }

    function handleParsingOutput(newInfoObj) {
        setInfoObject(newInfoObj);
        toggleRefCanvas(true);
        setCurrentLocation("step2");
        
    }

    function initStep3(newInfoObj) {
        toggleRefCanvas(false);
        setInfoObject(newInfoObj)
        setCurrentLocation("step3");
    }

    function initFinal(tmx, tsx) {
        fullTMX.current = tmx;
        fullTSX.current = tsx;
        setCurrentLocation("downloads");
    }


    return (
        <div className="tiledgen-box">
            {currentLocation === "main" && <TiledGenMainMenu goTo={setCurrentLocation}/>}
            {currentLocation === "about" && <TiledGenAbout goTo={setCurrentLocation}/>}
            {currentLocation === "step1" && <TiledGenStep1 nextStep={initStep2}/>}
            {currentLocation === "parsing" && <ParsingCanvas infoObject={infoObject} returnNewInfoObject={handleParsingOutput}/>}
            {currentLocation === "step2" && <TiledGenStep2 infoObject={infoObject} nextStep={initStep3}/>}
            {currentLocation === "step3" && <TiledGenStep3 infoObject={infoObject} initFinal={initFinal}/>}
            {currentLocation === "downloads" && <TiledGenDownload infoObj={infoObject} tmx={fullTMX.current} tsx={fullTSX.current}/>}
        </div>
    )
}


export default TiledGenNav;