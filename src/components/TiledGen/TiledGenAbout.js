import { useEffect, useRef } from "react"
import useSpan from "../useSpan"
import example_ts from "./example_ts.png"
import example_map_grey from "./example_map_grey.png"
import example_map_detail from "./example_map_detail.png"


function TiledGenAbout( { goTo } ) {

    const text = `This app takes two PNGs (one map and one tileset) and some other information (tile dimensions, etc...) provided by the user as input, and generates fully functional TMX and TSX 
    files as downloadable output. TMX and TSX files are used by the "Tiled Editor", an open source level editing software (linked below).
    2 map PNGs and 1 tileset are included as examples (download links below) - a purely grey variant making use of only a singular tile and one which includes some details - the app is mainly intended for greyboxed levels
    and is quite impractical when used for more detailed (visually, not geometrically) maps, but it's technically possible, so I thought I might as well include an example for that.
    Important information:
    The map PNG provided by the user must be in 1:1 scale (1 pixel = 1 tile).
    <255a / <100% opacity = empty tile.
    Per default your TSX file will expect its source PNG to sit in the same directory - for a custom path simply edit the first property of the <image source/> field in your generated TSX file. Alternatively you can handle things within the Tiled GUI.`
    const charArr = text.split("");  
    const spanArr = document.getElementsByClassName("tiledgen-about-char");
    const intervalRate = 14;
    let usedIndicies = useRef([]);
    let linkInterval = useRef();
    let linkIterator = useRef(1);
    let linkElements = useRef(document.getElementsByTagName("a"));

    useEffect(() => {       
        const interval = setInterval(() => {

            if(usedIndicies.current.length === spanArr.length) {
                clearInterval(interval);
                initLinkInterval();
                return;
            }
            showCharacters();
        }, intervalRate);

        return () => {
            clearInterval(interval)
                if(linkInterval.current) {
                    clearInterval(linkInterval.current)
                }
            }
    }, [])

    function initLinkInterval() {

        linkElements.current[0].classList.remove("hidden");

        linkInterval.current = setInterval(() => {
                if(linkIterator.current === 4) {
                    clearInterval(linkInterval.current);
                    return;
                }
                    linkElements.current[linkIterator.current].classList.remove("hidden");
                    linkIterator.current++;
            }, 200);
    }

    function showCharacters() {

        let index = Math.round(Math.random() * spanArr.length - 1)

        while(usedIndicies.current.includes(index) || index === -1) {
            index = Math.round(Math.random() * spanArr.length - 1)
        }

        spanArr[index].classList.remove("hidden");
        usedIndicies.current.push(index);
    }


    return (
        <div className="tiledgen-about">
            <h1 className="tiledgen-about-header">- ABOUT -</h1>
            <p className="about-paragraph">{useSpan(charArr, "tiledgen-about-char hidden", false)}</p>
            <div className="tiledgen-about-links-div">
                <br></br>
                    <div >
                        <a className="tiledgen-about-link hidden" href="https://www.mapeditor.org/">the tiled editor</a>
                    </div>
                <div >
                    <a className="tiledgen-about-link hidden" download="example_ts.png" href={example_ts}>example tileset</a>
                </div>
                <div >
                    <a className="tiledgen-about-link hidden" download="example_map_grey.png" href={example_map_grey}>example map (grey)</a>
                </div>
                <div >
                    <a className="tiledgen-about-link hidden"download="example_map_detail.png" href={example_map_detail}>example map (detail)</a>
                </div>
                <br></br>
            </div>
            <button onClick={() => {goTo("main")}} className="tiledgen-btn-about">BACK</button>
            
        </div>
    )
}


export default TiledGenAbout;