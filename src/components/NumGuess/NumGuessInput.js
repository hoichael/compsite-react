import { useEffect } from "react"

const NumGuessInput = ( { infoObject, setInfoObject, goTo }) => {

    let inputField;

    useEffect(() => {
        inputField = document.getElementsByClassName("numguess-input-field")[0];
        inputField.focus();

    }, [])


    function handleInput(e) {
        if(e.target.value == "") { return };
        if(e.target.value < infoObject.rangeStart || e.target.value > infoObject.rangeEnd) {
            alert("NOPE");
            inputField.value = ""
        }
    }

    function handleEnter() {
        if(inputField.value == "") {
            alert("NOPE");
        } else {
            let newInfoObj = infoObject;
            newInfoObj.input = inputField.value;
            setInfoObject(newInfoObj);
            goTo("result");
        }
    }

    return (
        <>
            <div className="numguess-header-div"> <div className="numguess-header">{infoObject.difficulty} ({infoObject.rangeStart} - {infoObject.rangeEnd})</div> </div>
            <input type="number" className="numguess-input-field" onChange={(e) => {handleInput(e)}}></input>
            <button className="numguess-btn" onClick={() => {handleEnter()}}>ENTER</button>
        </>
    )
}

export default NumGuessInput