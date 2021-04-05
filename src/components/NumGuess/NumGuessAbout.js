import { useEffect, useRef } from "react"


function NumGuessAbout( { goTo } ) {

const text = "A simple number guessing game that functions as you'd probably expect it to. In addition to the game itself, the app includes local storage based history and a stats page. Enjoy!"

useEffect(() => {       
    setTimeout(() => {
        document.getElementsByClassName("numguess-about-paragraph")[0].classList.add("numguess-about-paragraph-show");
    }, 100);
}, [])


return (
    <div className="numguess-about">
        <div className="numguess-about-top-div">
            <div className="numguess-about-header">- ABOUT -</div>
            <p className="numguess-about-paragraph">{text}</p>
        </div>
        <button onClick={() => {goTo("main")}} className="numguess-btn">BACK</button>
    </div>
)

}

export default NumGuessAbout