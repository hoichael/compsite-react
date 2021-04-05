
function TypingGameDifficulty( { infoObj, setInfo, changeRootLocation } ) {


    function handleClick(choice) {
        let newInfoObj = infoObj;
        newInfoObj.difficulty = choice;
        setInfo(newInfoObj);
        changeRootLocation("game");
    }

    return (
        <div className="typing-game-difficulty">
            <button className="typing-game-btn-menu" onClick={() => {handleClick("Easy")}}>EASY</button>
            <br></br>
            <button className="typing-game-btn-menu" onClick={() => {handleClick("Medium")}}>MEDIUM</button>
            <br></br>
            <button className="typing-game-btn-menu" onClick={() => {handleClick("Hard")}}>HARD</button>
        </div>
    )
}


export default TypingGameDifficulty;