import { useState } from "react"
import HomeTrail from "./HomeTrail"
import HomeLines from "./HomeLines"
import Falling from "../Falling"

function HomeRoot() {

    const [num, setNum] = useState(getNum());

    function getNum() {
        return Math.floor(Math.random() * 3);
    }
    
    return (
        <div className="home-div">
            {num === 0 && <>
                <Falling layer={"background"} isHome={true}/>
                <Falling layer={"foreground"} isHome={true}/>
            </>}
            {num === 1 && <HomeTrail />}
            {num === 2 && <HomeLines />}
        </div>
    )
}

export default HomeRoot;