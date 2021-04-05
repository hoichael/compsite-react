import { useEffect } from "react"

function TiledGenDownload( {infoObj, tmx, tsx} ) {

    let tmxBlob = new Blob([tmx]);
    let tmxURL = window.URL.createObjectURL(tmxBlob); 

    let tsxBlob = new Blob([tsx]);
    let tsxURL = window.URL.createObjectURL(tsxBlob); 

    const htmlBox = document.getElementsByClassName("tiledgen-box-step2")[0];

    useEffect(() => {
        htmlBox.classList.remove("tiledgen-box-step2");
    }, [])

    return (
        <div>
            <a download={infoObj.outputTMXname} href={tmxURL}>
                <button className="tiledgen-btn-main">download TMX</button>
            </a>
            <br></br>
            <a download={infoObj.outputTSXname} href={tsxURL}>
                <button className="tiledgen-btn-main">download TSX</button>
            </a>
        </div>
    )
}

export default TiledGenDownload