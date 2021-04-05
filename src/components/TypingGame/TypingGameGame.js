import { useState, useEffect } from "react"
import getSegment from "./getSegment"
import useSpan from "../useSpan"

import TypingGameCanvas from "./TypingGameCanvas"


function TypingGameGame( { infoObj, setInfoObj, reset, seeded } ) {
    
    const [segmentArr, setSegmentArr] = useState(getSegment(infoObj.difficulty))
    const [fullSegment, setFullSegment] = useState(segmentArr[0])
    const [segmentCharArr, setCharArr] = useState(fullSegment.split(""));


    useEffect(() => {
        if(infoObj.mode === "Standard" && !seeded) {
            let newInfoObj = infoObj;
            newInfoObj.seedStart = segmentArr[1];
            newInfoObj.seedEnd = segmentArr[2];
            newInfoObj.segment = fullSegment;
            setInfoObj(newInfoObj);
        }

        if(seeded) {
            setCharArr(infoObj.segment.split(""));
        }
    }, [])


    function initNewFrenzySegment() {
        setCharArr(getSegment(infoObj.difficulty)[0].split(""));
    }

    return (
        <div className="typing-game-game">
            <div className="typing-game-text-div">
                {useSpan(segmentCharArr, "typing-game-text-char")}
            </div>
            <TypingGameCanvas infoObj={infoObj} reset={reset} initNewFrenzySegment={initNewFrenzySegment}/>
        </div>
    )
}


export default TypingGameGame;