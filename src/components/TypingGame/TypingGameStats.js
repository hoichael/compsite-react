import { useState } from "react"
import TypingGameCycleButtons from "./TypingGameCycleButtons"
import TypingGameGetStats from "./TypingGameGetStats"
import formatStats from "../formatStats"


function TypingGameStats( { goTo } ) {

    const [currentPage, setCurrentPage] = useState(0);
    const statsObj = formatStats(TypingGameGetStats());

    return (
        <div className="typing-game-data-div">
                {currentPage === 0 && 
                    <div className="typing-game-data-entries-div">
                        <div className="typing-game-data-entry">
                            <h1>General Stats</h1>
                            <div>Total games played: {statsObj.totalPlayed} </div>
                            <div>Average WpM: {statsObj.avgWpM} </div>
                            <div>Highest WpM: {statsObj.highestWpM} </div>
                            <div>Average CpM: {statsObj.avgCpM} </div>
                            <div>Highest CpM: {statsObj.highestCpM} </div>
                            <div>Average time per char: {statsObj.avgTimePerChar}ms </div>
                        </div>
                    </div>}
                {currentPage === 1 && 
                    <div className="typing-game-data-entries-div">
                        <div className="typing-game-data-entry">
                            <h1>Standard Stats</h1>
                            <div>Total Standard games played: {statsObj.totalStandard} </div>
                            <div>Easy Standard games played: {statsObj.totalStandardEasy} </div>
                            <div>Medium Standard games played: {statsObj.totalStandardMedium} </div>
                            <div>Hard Standard games played: {statsObj.totalStandardHard} </div>
                            <div>AvG completion time Easy: {statsObj.avgTimeStandardEasy} </div>
                            <div>AvG completion time Medium: {statsObj.avgTimeStandardMedium} </div>
                            <div>AvG completion time Hard: {statsObj.avgTimeStandardHard} </div>
                        </div>
                    </div>}
                {currentPage === 2 && 
                    <div className="typing-game-data-entries-div">
                        <div className="typing-game-data-entry">
                            <h1>Frenzy Stats</h1>
                            <div>Easy Frenzy games played: {statsObj.totalFrenzyEasy} </div>
                            <div>AvG Frenzy Loops Easy: {statsObj.avgLoopsEasy} </div>
                            <div>Most Frenzy Loops Easy: {statsObj.mostLoopsEasy} </div>

                            <div>Medium Frenzy games played: {statsObj.totalFrenzyMedium} </div>
                            <div>AvG Frenzy Loops Medium: {statsObj.avgLoopsMedium} </div>
                            <div>Most Frenzy Loops Medium: {statsObj.mostLoopsMedium} </div>
                            
                            <div>Hard Frenzy games played: {statsObj.totalFrenzyHard} </div>
                            <div>AvG Frenzy Loops Hard: {statsObj.avgLoopsHard} </div>
                            <div>Most Frenzy Loops Hard: {statsObj.mostLoopsHard} </div>
                        </div>
                    </div>}
                {currentPage === 3 && 
                    <div className="typing-game-data-entries-div">
                        <div className="typing-game-data-entry">
                            <h1>Stats nobody asked for</h1>
                            <div>Under construction... </div>
                        </div>
                    </div>}

                    <TypingGameCycleButtons goTo={goTo} goToLocation={"main"} currentPage={currentPage} setCurrentPage={setCurrentPage} arrLength={4} itemsPerPage={1} />
            </div>
    )
}


export default TypingGameStats;