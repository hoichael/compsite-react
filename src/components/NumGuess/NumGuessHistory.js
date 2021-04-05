

function NumGuessHistory( { goTo } ) {

    const historyArr = JSON.parse(localStorage.getItem("numGuess")).reverse();

    function genDataEntries() {

        if(!historyArr) {
            return (
                <div className="typing-game-no-seeds-txt">
                    <h1>No history recorded!</h1>
                    <h3>Why not try... playing some games?</h3>
                </div>
            )
        }

        return historyArr.map(element => (
            <div key={Math.random() + Math.random() + Math.random()} className="numguess-data-entry">
                <div>Date: {element.date}</div>
                <div>Difficulty: {element.difficulty}</div>
                <div>Your Guess: {element.input}</div>
                <div>Generated Number: {element.number}</div>
                <div className={element.success === "yes" ? "numguess-succ" : "numguess-fail"}>Success: {element.success}</div>
            </div>
            )) 
    }

    return (
        <div className="numguess-stats-div">
            <div className="numguess-stats-entries-div">
                <div className="numguess-stats-entries-container">
                    {genDataEntries()}
                </div>
            </div>
            <button className="numguess-btn" onClick={() => { goTo("main") }}>menu</button>
        </div>
    )
}

export default NumGuessHistory