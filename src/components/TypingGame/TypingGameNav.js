import { useState } from "react"

import TypingGameMainMenu from "./TypingGameMainMenu"
import TypingGameModes from "./TypingGameModes"
import TypingGameSeedSelect from "./TypingGameSeedSelect"
import TypingGameDifficulty from "./TypingGameDifficulty"
import TypingGameAbout from "./TypingGameAbout"
import TypingGameStats from "./TypingGameStats"
import TypingGameHistory from "./TypingGameHistory"

function TypingGameNav( { infoObj, setInfoObj, setRootLocation, reset } ) {

    const [location, setLocation] = useState("main")

    return (
        <div className="typing-game-menu">
            {location === "main" && <TypingGameMainMenu goTo={setLocation}/>}
            {location === "modes" && <TypingGameModes goTo={setLocation} infoObj={infoObj} setInfo={setInfoObj}/>}
            {location === "seed-select" && <TypingGameSeedSelect goTo={setLocation} infoObj={infoObj} setInfo={setInfoObj} reset={reset}/>}
            {location === "difficulty" && <TypingGameDifficulty goTo={setLocation} infoObj={infoObj} setInfo={setInfoObj} changeRootLocation={setRootLocation}/>}
            {location === "stats" && <TypingGameStats goTo={setLocation}/>}
            {location === "about" && <TypingGameAbout goTo={setLocation}/>}
            {location === "history" && <TypingGameHistory goTo={setLocation}/>}
        </div>
    )
}


export default TypingGameNav;