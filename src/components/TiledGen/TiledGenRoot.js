import { useState } from "react"

import TiledGenManager from "./TiledGenManager"

function TiledGenRoot() {

//    setNavClass(`nav-tiledgen`);
//    setNavButtonClass(`nav-btn-tiledgen`);

    return (
        <div className="tiledgen-root">
            <TiledGenManager />
        </div>
    )
}


export default TiledGenRoot;