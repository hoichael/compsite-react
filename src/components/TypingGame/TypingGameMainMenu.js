
function TypingGameMainMenu( {goTo} ) {

    return (
        <div className="typing-game-main-menu">
            <button className="typing-game-btn-menu" onClick={() => {goTo("modes")}}>PLAY</button>
            <br></br>
            <button className="typing-game-btn-menu" onClick={() => {goTo("history")}}>HISTORY</button>
            <br></br>
            <button className="typing-game-btn-menu" onClick={() => {goTo("stats")}}>STATS</button>
            <br></br>
            <button className="typing-game-btn-menu" onClick={() => {goTo("about")}}>ABOUT</button>
        </div>
    )
}


export default TypingGameMainMenu;