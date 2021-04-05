import { useRef, useEffect } from "react"

function TypingGameInput( { startGame, endGame, mode, newFrenzyLoop, handleError, updateCpm, updateErrorCount, lockInput } ) {

    let currentCharIndex = useRef(0);
    let recentKey = useRef()
    let recentKeyArr = useRef([]);
    let errorCount = useRef(0);
    let spanArr = useRef(document.getElementsByClassName("typing-game-text-char"))
    let gameInProgress = useRef(false);
    let errorArr = useRef([]);
    let gameHasEnded = useRef(false);

    let charTimer = useRef();

    useEffect( () => {
        spanArr.current[0].classList.add("current-char")
        console.log("HELLO GAME")

    return console.log("GOODBYE GAME")
    }, [])

    window.onkeydown = function(e) {
        console.log(lockInput, "LOCK INPUUUT");

        if(lockInput) { gameHasEnded.current = true };
        if(gameHasEnded.current) { return };
    
            if(!gameInProgress.current) {
                gameInProgress.current = true;
                charTimer.current = new Date();
                startGame();
            }
    
            if(recentKeyArr.current.includes(e.key)) { return };
    
            const currentChar = spanArr.current[currentCharIndex.current];
    
            if(currentChar.innerHTML.toLowerCase() === e.key) {
                currentChar.classList.add("correct-char");
                updateCpm(new Date() - charTimer);
                charTimer = new Date();
            } else {
                if(currentChar.innerHTML === " ") {
                    currentChar.classList.add("incorrect-char-space");
                } else {
                    currentChar.classList.add("incorrect-char");
                }
                handleError();
                errorCount.current++;
                updateErrorCount();
                errorArr.current.push(currentCharIndex.current);
            }
    
            currentChar.classList.remove("current-char");
    
            if(errorCount.current >= 3) {
                console.log("FAILURE")
                gameHasEnded.current = true;
                endGame(false);

            } else {
                if(spanArr.current[currentCharIndex.current + 1]) {
                    spanArr.current[currentCharIndex.current + 1].classList.add("current-char")
                };
                currentCharIndex.current++;
                recentKey.current = e.key;
                recentKeyArr.current.push(e.key);
            };
    
            if(currentCharIndex.current === spanArr.current.length) {

                if(mode !== "Frenzy") {
                    console.log("VICTORY")
                    gameHasEnded.current = true;
                    endGame(true);
                } else {
                    newFrenzyLoop();
                    errorCount.current = 0;
                    spanArr.current = document.getElementsByClassName("typing-game-text-char");
                    spanArr.current[0].classList.add("current-char");
                    currentCharIndex.current = 0;
                }

            };
        };

        
    window.onkeyup = function(e) {

        if(gameHasEnded.current) { return };

        if(recentKeyArr.current.includes(e.key)) { 
            recentKeyArr.current.splice(recentKeyArr.current.indexOf(e.key), 1); 
        } else {
            return
        };
    }

    return (
        <>
        </>
    )
}

export default TypingGameInput