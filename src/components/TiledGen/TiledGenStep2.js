import { useEffect } from "react"
import TiledGenColorTable from "./TiledGenColorTable"

function TiledGenStep2( { infoObject, nextStep } ) {

    const htmlBox = document.getElementsByClassName("tiledgen-box")[0];

    useEffect(() => {
        htmlBox.classList.add("tiledgen-box-step2");
    }, [])

    
    return (
        <div className="tiledgen-step2">
            <TiledGenColorTable infoObject={infoObject} initNext={nextStep}/>
        </div>
    )
}


export default TiledGenStep2;