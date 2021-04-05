
function TiledGenMainMenu( { goTo } ) {


    return (
        <div className="tiledgen-main-menu">
            <button className="tiledgen-btn-main" onClick={() => { goTo("step1") }}>Start</button>
            <button className="tiledgen-btn-main" onClick={() => { goTo("about") }}>About</button>
        </div>
    )
}


export default TiledGenMainMenu;