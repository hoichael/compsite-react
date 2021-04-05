import { useRef } from "react"

function TiledGenStep1( { nextStep } ) {
    
    const illegalCharacters = ["\\", "/", "<", ">", "*", "|",":"]

    let infoObject = useRef({
        tileWidth: undefined,
        tileHeight: undefined,
        outputTMXname: undefined,
        outputTSXname: undefined,

        mapImage: new Image(),
        tilesetImage: new Image(),
        tilesetName: undefined,

        mapArr: [],
        tilesetArr: [],
        colorsArr: []
    })

    function initStep2() {
        if(Object.values(infoObject.current).indexOf(undefined) >= 0 && Object.values(infoObject.current).indexOf(undefined) <= 7) {
            alert("Make sure all fields are filled out properly");
        } else {
            nextStep(infoObject);
        }
    }

    function handleNameInput(input, which) {

        for(let i = 0; i < illegalCharacters.length; i++) {
            if(input.includes(illegalCharacters[i])) {
                alert("Refrain from using any illegal characters (\\ / < > * | :)");
                return;
            }
        };

        if(which === "tmx") {infoObject.current.outputTMXname = input.concat(".tmx")} else {infoObject.current.outputTSXname = input.concat(".tsx")};
    }

    function handleFileInput(inputElement, which) {

        const name = getFileName(inputElement);
        handleImgSrc(inputElement, which);

        if(which !== "map") {
            infoObject.current.tilesetName = name
        };
    }

    function getFileName(element) {
        let targetIndex;
        const file = element.value;
        for(let i = file.length - 1; i > 0; i--) {
            if(file.charAt(i) == "/" || file.charAt(i) == "\\") {
                targetIndex = i;
                break;
            }
        }
    
        if(targetIndex == undefined) {
            alert('Something about the path of your provided file is fucked. You will need to manually correct the "source" property of the generated output file');
        }
    
        return file.substring(targetIndex + 1);
    }

    function handleImgSrc(element, which) {
        const reader = new FileReader();
        reader.readAsDataURL(element.files[0]);
        
        reader.onload = function() {
            if(which === "map") {infoObject.current.mapImage.src = reader.result} else {infoObject.current.tilesetImage.src = reader.result};
        }
    }

    return (
        <div className="tiledgen-step1">
            <label htmlFor="map-input">map PNG</label>
            <br></br>
            <input type="file" className="map-input" accept=".png" onChange={(e) => {handleFileInput(document.getElementsByClassName("map-input")[0], "map")}}></input>
            <br></br> <br></br>

            <label htmlFor="tileset-input">tileset PNG</label>
            <br></br>
            <input type="file" className="tileset-input" accept=".png" onChange={(e) => {handleFileInput(document.getElementsByClassName("tileset-input")[0], "bruh")}}></input>
            <br></br> <br></br>

            <div className="tile-dimensions-text"><span className="tile-width-text">tile width</span><span className="tile-height-text">tile height</span></div>

            <input type="number" className="tile-dimensions-input tile-width-input tiledgen-input-num" onChange={(e) => {infoObject.current.tileWidth = e.target.value}}></input>
            <input type="number" className="tile-dimensions-input tile-height-input tiledgen-input-num" onChange={(e) => {infoObject.current.tileHeight = e.target.value}}></input>

            <br></br> <br></br>

            <label htmlFor="tmx-name-input">TMX output name</label>
            <br></br>
            <input type="text" className="tmx-name-input" onChange={(e) => {handleNameInput(e.target.value, "tmx")}}></input>
            <br></br> <br></br>

            <label htmlFor="tsx-name-input">TSX output name</label>
            <br></br>
            <input type="text" className="tsx-name-input" onChange={(e) => {handleNameInput(e.target.value, "bruh")}}></input>
            <br></br> <br></br>
    
            <button className="tiledgen-btn" onClick={() => { initStep2() }}>continue</button>

        </div>
    )
}


export default TiledGenStep1;