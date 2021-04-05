import { useEffect, useRef } from "react"
import useSpan from "../useSpan"

function TypingGameAbout( { goTo } ) {

    const text = `This fine little app doesn't just put your typing skills to the test in a polished and carefully constructed environment featuring multiple game modes, a detailed history page and comprehensive stats of your performance, no, it does so using randomly selected segments from James Joyce' experimental masterpiece "Finnegans Wake"!.
    The unspeakable horrors that are about to be unleashed onto your web browser of choice should be of particular appeal to both the general masochist as well as those who are prone to avant garde literature. Whichever you may be, enjoy!`
    const charArr = text.split("");  
    const spanArr = document.getElementsByClassName("about-char");
    const intervalRate = 22;
    let currentIndex = useRef(0);


    useEffect(() => {       
        const interval = setInterval(() => {

            if(currentIndex.current === spanArr.length) {
                clearInterval(interval);
                return;
            } else {
                spanArr[currentIndex.current].classList.remove("hidden");
                currentIndex.current++;
            }

        }, intervalRate);

        return () => clearInterval(interval)
    }, [])


    return (
        <div className="typing-game-about">
            <h1>- ABOUT -</h1>
            <p className="about-paragraph">{useSpan(charArr, "about-char hidden", false)}</p>
            <button onClick={() => {goTo("main")}} className="typing-game-btn">BACK</button>
        </div>
    )
}


export default TypingGameAbout;