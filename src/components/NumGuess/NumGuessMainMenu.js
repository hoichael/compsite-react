
function NumGuessMainMenu( {goTo} ) {

    return (
        <>

                <button className="numguess-btn" onClick={() => {goTo("difficulty")}}>PLAY</button>

                <button className="numguess-btn" onClick={() => {goTo("stats")}}>STATS</button>

                <button className="numguess-btn" onClick={() => {goTo("history")}}>HISTORY</button>

                <button className="numguess-btn" onClick={() => {goTo("about")}}>ABOUT</button>

        </>
    )
}


export default NumGuessMainMenu;