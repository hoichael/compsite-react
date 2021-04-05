import { useState, useEffect } from "react"

function TypingGameCycleButtons( { currentPage, setCurrentPage, arrLength, goTo, goToLocation, itemsPerPage} ) {

    const [arrowMinusClass, setArrowMinusClass] = useState("typing-game-btn typing-game-arrow grey");
    const [arrowPlusClass, setArrowPlusClass] = useState("typing-game-btn typing-game-arrow");

    const classRefBlack = "typing-game-btn typing-game-arrow";
    const classRefGrey = "typing-game-btn typing-game-arrow grey";

    useEffect(() => {
        if(arrLength <= itemsPerPage) {
            setTimeout(() => {
                setArrowPlusClass(classRefGrey);
            }, 2);
        }
    }, [])
    

    function cyclePages(direction) {

        if(direction === "-") {
            if(currentPage === 0) {
                return;
            } else {
                    setArrowPlusClass(classRefBlack);
                if(currentPage - itemsPerPage === 0) {
                    setArrowMinusClass(classRefGrey);
                }
                setCurrentPage(currentPage - itemsPerPage);
            }
        } else {
            if(currentPage + itemsPerPage >= arrLength) {
                return;
            } else {
                setArrowMinusClass(classRefBlack);
                if(currentPage + itemsPerPage * 2 >= arrLength) {
                    setArrowPlusClass(classRefGrey);
                }
                setCurrentPage(currentPage + itemsPerPage);
            }
        }
    }

    return (


        <div className="typing-game-cycle-buttons">
            <button className={arrowMinusClass} onClick={() => { cyclePages("-") }}>{"<-"}</button>
             <button className="typing-game-btn" onClick={() => { goTo(goToLocation) }}>BACK</button>
             <button className={arrowPlusClass} onClick={() => { cyclePages("+") }}>{"->"}</button>
         </div> 
    )
}

export default TypingGameCycleButtons