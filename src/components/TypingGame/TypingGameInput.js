import { useRef, useEffect } from "react"

function TypingGameInput( { startGame, endGame, mode, newFrenzyLoop, updateCpm, updateErrorCount, lockInput } ) {

    let currentCharIndex = useRef(0);
    let errorCount = useRef(0);
    let spanArr = useRef(document.getElementsByClassName("typing-game-text-char"))
    let gameInProgress = useRef(false);
    let errorArr = useRef([]);
    let gameHasEnded = useRef(false);

    let charTimer = useRef();

    useEffect( () => {
        if(!gameHasEnded.current) {
            spanArr.current[0].classList.add("current-char")
        }
    }, [])

    function handleInput(key) {

        if(lockInput) { gameHasEnded.current = true };
        if(gameHasEnded.current) { return };
        if(key === null) { return };
    
            if(!gameInProgress.current) {
                gameInProgress.current = true;
                charTimer.current = new Date();
                startGame();
            }
    
            const currentChar = spanArr.current[currentCharIndex.current];
    
            if(currentChar.innerHTML === key) {
                currentChar.classList.add("correct-char");
                updateCpm(new Date() - charTimer);
                charTimer = new Date();
            } else {
                if(currentChar.innerHTML === " ") {
                    currentChar.classList.add("incorrect-char-space");
                } else {
                    currentChar.classList.add("incorrect-char");
                }
                errorCount.current++;
                updateErrorCount();
                errorArr.current.push(currentCharIndex.current);
            }
    
            currentChar.classList.remove("current-char");
    
            if(errorCount.current >= 3) {
                gameHasEnded.current = true;
                endGame(false);

            } else {
                if(spanArr.current[currentCharIndex.current + 1]) {
                    spanArr.current[currentCharIndex.current + 1].classList.add("current-char")
                };
                currentCharIndex.current++;
            };
    
            if(currentCharIndex.current === spanArr.current.length) {

                if(mode !== "Frenzy") {
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

    return (
        <input type="text" className="typing-game-input-element" autoFocus={true} onBlur={(e) => {e.currentTarget.focus()}} onChange={(e) => {handleInput(e.nativeEvent.data)}}></input>
    )
}

export default TypingGameInput