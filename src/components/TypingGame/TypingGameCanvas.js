import { useRef, useState, useEffect } from "react"
import TypingGameInput from "./TypingGameInput"
import TypingGameResult from "./TypingGameResult"
import getCurrentDate from "../GetCurrentDate"
import SetLocalStorage from "../SetLocalStorage"

function TypingGameCanvas( { infoObj, reset, initNewFrenzySegment } ) {

    let canvasRef = useRef()

    const framerate = 1;

    let referenceInfo = useRef(document.getElementsByClassName("typing-game-box")[0].getBoundingClientRect());

    const initialTime = getInitialTime();

    let colorR = useRef(0);
    let colorG = useRef(255);
    let posY = useRef();
    let barHeight = useRef();
    let baseWidth = useRef()

    let currentPercent = useRef(0);
    let stepIterator = useRef(initialTime / 1000);

    const colorStep = 0.225;

    let widthStep = useRef();
    let posXstep = useRef();

    let timeStart = useRef();
    let timeEnd = useRef();

    let interval = useRef();

    let ctx = useRef();

    let freeze = useRef(false);

    let lockInput = useRef(false);

    let newInfoObj = useRef();

    const [showResult, setResultFlag] = useState(false);

    let cpmArr = useRef([]);

    let errorCount = useRef(0);

    let frenzyLoopsCount = useRef(0);

    function init() {

        let startText = document.getElementsByClassName("typing-game-start-text")[0];
        startText.classList.add("typing-game-start-text-hidden");
        setTimeout(() => {
            startText.classList.add("hide");
        }, 1600);
        
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx.current = canvasRef.current.getContext("2d");

        timeStart.current = new Date();

        interval.current = setInterval(() => {
                barController(); 
        }, framerate); 

    }

    useEffect( () => {
        return () => {clearInterval(interval.current)};
    }, [])

    function getInitialTime() {
        switch(infoObj.difficulty) {
            case "Easy":
                return 7000;
            case "Medium":
                return 6000;
            case "Hard":
                return 8500;
          }
    }

    function barController() {

        if(!canvasRef.current) { return };

        ctx.current.clearRect(0, 0, 2000, 2000);

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx.current = canvasRef.current.getContext("2d");

        referenceInfo.current = document.getElementsByClassName("typing-game-box")[0].getBoundingClientRect();

        baseWidth.current = referenceInfo.current.width;
        widthStep.current = baseWidth.current / 100;
        posXstep.current = widthStep.current / 2;

        posY.current = referenceInfo.current.y - 64;
        barHeight.current = referenceInfo.current.height / 12;

    
        ctx.current.fillStyle = `rgb(${colorR.current}, ${colorG.current}, 0)`; 
        ctx.current.fillRect(referenceInfo.current.x, posY.current, baseWidth.current - widthStep.current * (currentPercent.current /  10), barHeight.current);

        stepIterator.current--;

        if(currentPercent.current >= 1000) {
            if(!freeze.current) {
            conclude(false);
            }
        }

        if(stepIterator.current <= 0) {
            if(!freeze.current) {
                colorR.current += colorStep;
                colorG.current -= colorStep;
                currentPercent.current++;
                stepIterator.current = initialTime / 1000;
            }
        }
    };

    function updateCpmArr(element) {
        cpmArr.current.push(element);
    }

    function updateErrorCount() {
        errorCount.current++
    }

    function getPMstats(infoObj) {
        let newInfoObj = infoObj;
        let factor = 60000 / newInfoObj.time;
        newInfoObj.cpm = Math.round(cpmArr.current.length * factor);
        newInfoObj.wpm = Math.round(newInfoObj.cpm / 4.7);
    
        return newInfoObj;
    }

    function newFrenzyLoop() {
        frenzyLoopsCount.current += 1;
        initNewFrenzySegment();
        currentPercent.current-= 500;

        colorR.current = 0;
        colorG.current = 255;

        if(currentPercent.current <= 0) {
            currentPercent.current = 0;
        } else {
            for(let i = 0; i < currentPercent.current; i++) {
                colorR.current += colorStep;
                colorG.current -= colorStep;
            }
        }

    }

    function conclude(success) {

        document.getElementsByClassName("typing-game-start-text")[0].classList.add("hide");

        clearInterval(interval)
        freeze.current = true;

        lockInput.current = true;
        timeEnd.current = new Date();

        newInfoObj.current = infoObj;
        newInfoObj.current.time = timeEnd.current - timeStart.current;
        newInfoObj.current.avgTimePerChar = newInfoObj.current.time / cpmArr.current.length;
        newInfoObj.current.errorCount = errorCount.current;
        newInfoObj.current.success = success;
        newInfoObj.current.frenzyLoops = frenzyLoopsCount.current;

        newInfoObj.current = getPMstats(newInfoObj.current);
        newInfoObj.current.date = getCurrentDate()
        SetLocalStorage("typing", newInfoObj.current);

        setResultFlag(true);
    }


    return (
        <div>
            <TypingGameInput startGame={init} endGame={conclude} mode={infoObj.mode} newFrenzyLoop={newFrenzyLoop} updateCpm={updateCpmArr} updateErrorCount={updateErrorCount} lockInput={lockInput.current}/>
            <canvas className="typing-game-canvas" ref={canvasRef}></canvas>
            <div className="typing-game-start-text">start typing to begin</div>
            {showResult && <TypingGameResult infoObj={newInfoObj.current} reset={reset}/>}
        </div>
    )
}

export default TypingGameCanvas