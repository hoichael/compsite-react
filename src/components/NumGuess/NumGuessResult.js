import { useState, useRef, useEffect } from "react"
import getCurrentDate from "../GetCurrentDate"
import SetLocalStorage from "../SetLocalStorage"

const NumGuessResult = ( { infoObject, setInfoObject, goTo, reset }) => {
    let canClick = useRef(false);


    const [finalNumberState, setFinalNumber] = useState();
    let finalNumber;

    const [fauxNumberState, setFauxNumber] = useState(0);
    let fauxNumber = 0;

    const [resultNumberClass, setResultNumberClass] = useState("numguess-result-number")

    const [menuButtonClass, setMenuButtonClass] = useState("numguess-btn-result-inactive")

    let [interval, setInterval] = useState(30);

    let [iterator, setIterator] = useState(0);

    let newInfoObj = useRef(infoObject);


    function handleReset() {
        if(!canClick.current) { return; };
        reset();
        goTo("main");
    }

    function countdown() {
        setIterator(iterator += 1);
        setInterval(interval *= 1.15);
        genNumber();
        if(iterator < 28) {
            setTimeout(countdown, interval);
        }
    }

    function genNumber() {

        let numberTemp;

        if(infoObject.rangeEnd != 1) {
            numberTemp = Math.floor(Math.random() * infoObject.rangeEnd) + infoObject.rangeStart;
        } else {
            numberTemp = Math.round(Math.random());
        }

        if(iterator < 28) {
            if(numberTemp === fauxNumber) {
                genNumber()
            } else {
                fauxNumber = numberTemp;
                setFauxNumber(fauxNumber);
            }

        } else {
            finalNumber = numberTemp;

            if(finalNumber == newInfoObj.current.input) {
                setResultNumberClass("numguess-result-number numguess-succ-fat")
                newInfoObj.current.success = "yes";
            } else {
                setResultNumberClass("numguess-result-number numguess-fail-fat")
                newInfoObj.current.success = "no";
            }
    
            newInfoObj.current.number = finalNumber;

            setFinalNumber(finalNumber);

            finalize();
        }
    }


    function finalize() {

        newInfoObj.current.date = getCurrentDate();
        SetLocalStorage("numGuess", newInfoObj.current);
        setMenuButtonClass("numguess-btn")
        canClick.current = true;

    }




   useEffect(() => {
    countdown();
  }, []);

    return (
        <>
            <div className="numguess-header-div"> <div className="numguess-header">{finalNumberState !== undefined ? (finalNumberState == infoObject.input ? "Success!" : "Failure.") : "Generating Number..."}</div></div>
            <div className={resultNumberClass}>{finalNumberState !== undefined ? finalNumberState : fauxNumberState}</div>
            <button className={menuButtonClass} onClick={() => {handleReset()}}>M E N U</button>
        </>
    )
}

export default NumGuessResult