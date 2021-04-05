import GetRange from "./GetRange"



const NumGuessDifficultySelect = ( { infoObject, setInfoObject, goTo }) => {

    function handleSelect(id) {
        let newInfoObj = GetRange(infoObject, id);
        setInfoObject(newInfoObj);
        goTo("input")
    }

    return (
        <>
            <button className="numguess-btn" onClick={() => {handleSelect(1)}}>E A S Y</button>
            <button className="numguess-btn" onClick={() => {handleSelect(2)}}>N R M L</button>
            <button className="numguess-btn" onClick={() => {handleSelect(3)}}>H A R D</button>
            <button className="numguess-btn" onClick={() => {handleSelect(4)}}>N O P E</button>
        </>
    )
}

export default NumGuessDifficultySelect