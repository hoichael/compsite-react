import { useState } from "react"
import TiledGenRefCan from "./TiledGenRefCan"

import TiledGenNav from "./TiledGenNav"

function TiledGenManager() {
    const [currentInfo, setCurrentInfo] = useState();
    const [showRefCanvas, setRefCanvasFlag] = useState(false);


    return (
        <div className="tiledgen-div">
            <TiledGenNav setInfoObject={setCurrentInfo} infoObject={currentInfo} toggleRefCanvas={setRefCanvasFlag}/>
            {showRefCanvas && <TiledGenRefCan infoObject={currentInfo}/>}
        </div>
    )
}


export default TiledGenManager;