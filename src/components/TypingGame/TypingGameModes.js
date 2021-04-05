import { useRef, useEffect } from "react"
import useSpan from "../useSpan"

function TypingGameModes( { infoObj, setInfo, goTo } ) {

    const standardText = "Finish the prompt as fast as possible. 3 mistakes: Game Over!";
    const standardCharArr = standardText.split("");

    const seededText = "Standard... but seeded!";
    const seededCharArr = seededText.split("");

    const frenzyText = "Withstand an endless barrage of literary goodness";
    const frenzyCharArr = frenzyText.split("");
    

    let standardIterator = useRef(0);
    let seededIterator = useRef(0);
    let frenzyIterator = useRef(0);

    const intervalRate = 28;

    const standardSpanArr = document.getElementsByClassName("standard-explanation-char");
    const seededSpanArr = document.getElementsByClassName("seeded-explanation-char");
    const frenzySpanArr = document.getElementsByClassName("frenzy-explanation-char");

    let standardInterval = useRef();
    let seededInterval = useRef();
    let frenzyInterval = useRef();

    useEffect(() => {   
            return () => {
            if(standardInterval) clearInterval(standardInterval);
            if(seededInterval) clearInterval(seededInterval);
            if(frenzyInterval) clearInterval(frenzyInterval);
            }
        }, [])

    function handleButtonEnter(whichButton) {
        switch(whichButton) {
            case "Standard":
                standardInterval = setInterval(() => {
                    showText(standardSpanArr, standardIterator, standardInterval);
                }, intervalRate);
                break;
            case "Seeded":
                seededInterval = setInterval(() => {
                    showText(seededSpanArr, seededIterator, seededInterval);
                }, intervalRate);
                break;    
            case "Frenzy":
                frenzyInterval = setInterval(() => {
                    showText(frenzySpanArr, frenzyIterator, frenzyInterval);
                }, intervalRate);
                break;    
        }
    }

    function showText(arr, iterator, interval) {
        if(iterator.current === arr.length) {
            clearInterval(interval);
            return;
        }
        arr[iterator.current].classList.remove("hidden");
        iterator.current++; 
    }

    function handleButtonLeave(whichButton) {
        switch(whichButton) {
            case "Standard":
                clearInterval(standardInterval);
                break;
            case "Seeded":
                clearInterval(seededInterval);
                break;
            case "Frenzy":
                clearInterval(frenzyInterval);
                break;          
        }
    }

    function handleChoice(choice) {
        let newInfoObj = infoObj;
        infoObj.mode = choice;
        setInfo(newInfoObj);
        if(choice === "Seeded") {
            goTo("seed-select");
        } else {
            goTo("difficulty");
        }
    }

    return (
        <div className="typing-game-modes">
            <button className="typing-game-btn-menu" onMouseEnter={() => { handleButtonEnter("Standard") }} onMouseLeave={() => {handleButtonLeave("Standard")}}
            onClick={() => { handleChoice("Standard") }}
            >STANDARD</button>
                <div className="standard-explanation">
                    {useSpan(standardCharArr, "standard-explanation-char hidden", false)}
                </div>
            <button className="typing-game-btn-menu" onMouseEnter={() => { handleButtonEnter("Seeded") }} onMouseLeave={() => {handleButtonLeave("Seeded")}}
            onClick={() => { handleChoice("Seeded") }}
            >SEEDED</button>
                <div className="seeded-explanation">
                    {useSpan(seededCharArr, "seeded-explanation-char hidden", false)}
                </div>
            <button className="typing-game-btn-menu" onMouseEnter={() => { handleButtonEnter("Frenzy") }} onMouseLeave={() => {handleButtonLeave("Frenzy")}}
            onClick={() => { handleChoice("Frenzy") }}
            >FRENZY</button>
                <div className="frenzy-explanation">
                    {useSpan(frenzyCharArr, "frenzy-explanation-char hidden", false)}
                </div>
            <button className="typing-game-btn-menu" onClick={() => { goTo("main") }}>BACK</button>    
        </div>
    )
}


export default TypingGameModes;