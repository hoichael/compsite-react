import NumGuessGetStats from "./NumGuessGetStats"

function NumGuessStats( { goTo } ) {

    const statsObject = NumGuessGetStats();
    const totalGames = statsObject.totalEasy + statsObject.totalNormal + statsObject.totalHard + statsObject.totalNope;
    const totalWon = statsObject.easyWon + statsObject.normalWon + statsObject.hardWon + statsObject.nopeWon;

    function getWinrate(total, won) {

        if(won === 0) { return won } else { 
            return Math.round(100 * (won / total));
        };

    }

    return (
        <div className="numguess-stats-div">
            <div className="numguess-stats-entries-div">
                <div className="numguess-stats-entries-container">
                    <br></br>
                    <div className="numguess-stats-entry">{`total games played: ${totalGames}`}</div>
                    <div className="numguess-stats-entry">{`total games won: ${totalWon} (${getWinrate(totalGames, totalWon)}%)`}</div>
                    <br></br>
                    <br></br>
                    <div className="numguess-stats-entry">{`easy games played: ${statsObject.totalEasy}`}</div>
                    <div className="numguess-stats-entry">{`easy games won: ${statsObject.easyWon} (${getWinrate(statsObject.totalEasy, statsObject.easyWon)}%)`}</div>
                    <br></br>
                    <br></br>
                    <div className="numguess-stats-entry">{`normal games played: ${statsObject.totalNormal}`}</div>
                    <div className="numguess-stats-entry">{`normal games won: ${statsObject.normalWon} (${getWinrate(statsObject.totalNormal, statsObject.normalWon)}%)`}</div>
                    <br></br>
                    <br></br>
                    <div className="numguess-stats-entry">{`hard games played: ${statsObject.totalEasy}`}</div>
                    <div className="numguess-stats-entry">{`hard games won: ${statsObject.hardWon} (${getWinrate(statsObject.totalHard, statsObject.hardWon)}%)`}</div>
                    <br></br>
                    <br></br>
                    <div className="numguess-stats-entry">{`nope games played: ${statsObject.totalNope}`}</div>
                    <div className="numguess-stats-entry">{`nope games won: ${statsObject.nopeWon} (${getWinrate(statsObject.totalNope, statsObject.nopeWon)}%)`}</div>
                    <br></br>
                </div>
            </div>
            <button className="numguess-btn" onClick={() => { goTo("main") }}>menu</button>
        </div>
    )
}

export default NumGuessStats