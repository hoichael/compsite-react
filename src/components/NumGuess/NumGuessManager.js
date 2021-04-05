import { useState } from "react"
import Falling from "../Falling"
import NumGuessNav from "./NumGuessNav"

function NumGuessManager() {

    const [infoObject, setInfoObject] = useState( {
        difficulty: undefined,
        input: undefined,
        rangeStart: undefined,
        rangeEnd: undefined,
        number: undefined,
        success: undefined,
        date: undefined
    } )

    function reset() {
        const resetInfoObj = {
            difficulty: undefined,
            input: undefined,
            rangeStart: undefined,
            rangeEnd: undefined,
            number: undefined,
            success: undefined,
            date: undefined
        };
        setInfoObject(resetInfoObj);
    }

    return (
        <div className="numguess-main-div">
            <Falling layer={"background"} isHome={false}/>
            <NumGuessNav infoObject={infoObject} setInfoObject={setInfoObject} reset={reset}/>
            <Falling layer={"foreground"} isHome={false}/>
        </div>
    )
}

export default NumGuessManager