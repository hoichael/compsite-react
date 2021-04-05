import { useState } from "react"
import NumGuessDifficultySelect from "./NumGuessDifficultySelect";
import NumGuessMainMenu from "./NumGuessMainMenu"
import NumGuessInput from "./NumGuessInput"
import NumGuessResult from "./NumGuessResult"
import NumGuessStats from "./NumGuessStats"
import NumGuessHistory from "./NumGuessHistory"
import NumGuessAbout from "./NumGuessAbout"

function NumGuessNav( { infoObject, setInfoObject, reset } ) {

    const [currentLocation, setCurrentLocation] = useState("main");

    return (
        <div className="numguess-ui-container">
            {currentLocation === "main" && <NumGuessMainMenu goTo={setCurrentLocation}/>}
            {currentLocation === "difficulty" && <NumGuessDifficultySelect infoObject={infoObject} setInfoObject={setInfoObject} goTo={setCurrentLocation}/>}
            {currentLocation === "input" && <NumGuessInput infoObject={infoObject} setInfoObject={setInfoObject} goTo={setCurrentLocation}/>}
            {currentLocation === "result" && <NumGuessResult infoObject={infoObject} setInfoObject={setInfoObject} goTo={setCurrentLocation} reset={reset}/>}
            {currentLocation === "stats" && <NumGuessStats goTo={setCurrentLocation}/>}
            {currentLocation === "history" && <NumGuessHistory goTo={setCurrentLocation}/>}
            {currentLocation === "about" && <NumGuessAbout goTo={setCurrentLocation}/>}
        </div>
    )
}

export default NumGuessNav