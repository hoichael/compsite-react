function TypingGameResultStats( { infoObj } ) {

    return (
        <div className="typing-game-result-stats">
            <div>Time: {infoObj.time}ms</div>
            <div>WpM: {infoObj.wpm}</div>
            <div>CpM: {infoObj.cpm}</div>
            {infoObj.mode === "Frenzy" && <div>Frenzy Loops: {infoObj.frenzyLoops}</div>}
        </div>
    )
}

export default TypingGameResultStats