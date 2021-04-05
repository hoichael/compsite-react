import { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

import Transition from "./Transition"

function Nav() {

    const pageHistory = useHistory();
    const [transitionOngoing, setTransitionBool] = useState(false);
    const [navClass, setNavClass] = useState();
    const [navButtonClass, setNavButtonClass] = useState();

    
    useEffect(() => {
        setClasses();
    })
  
    function handleClick(path) {
  
        if(transitionOngoing) { return };

        setTransitionBool(true);
  
        setTimeout(() => { 
            pageHistory.push(path);
            setClasses();            
        }, 1500);

        setTimeout(() =>{
            setTransitionBool(false);
        }, 3200)
    }

    function setClasses() {
        let pathTemp = pageHistory.location.pathname;
        let slicedPath = pathTemp.slice(1, pathTemp.length);
        
        // NAV CLASSES WONT BE PROPERLY SET ON MANUAL PATH CHANGE ! ! ! gotta do smth bout that
        setNavClass(`nav-${slicedPath}`);
        setNavButtonClass(`nav-btn-${slicedPath}`);
    }
  


    return (
        <>
            <div className={navClass}>
                <button className={navButtonClass} onClick={() => {handleClick("/home")}}>Home</button>
                <button className={navButtonClass} onClick={() => {handleClick("/numguess")}}>Num</button>
                <button className={navButtonClass} onClick={() => {handleClick("/typing")}}>Type</button>
                <button className={navButtonClass} onClick={() => {handleClick("/tiledgen")}}>Gen</button>
            </div>
            {transitionOngoing && <Transition />}
        </>
    )
}


export default Nav;