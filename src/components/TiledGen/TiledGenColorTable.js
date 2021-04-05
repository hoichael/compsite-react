
function TiledGenColorTable( { infoObject, initNext } ) {

    let tileCount = (infoObject.tilesetImage.width / infoObject.tileWidth) * (infoObject.tilesetImage.height / infoObject.tileHeight);
    let colorInfoArr = [];

    function ColorInfo(r, g, b, a, ID) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.ID = ID;
    }

    function genColorStyling(element) {
        return {
            backgroundColor: `rgba(${element.r}, ${element.g}, ${element.b}, 1)`
        }
    }

    function handleSubmit() {
        let inputArr = document.getElementsByClassName("tiledgen-color-input");       
        let checkForDupes = [];
        let goodToGo = true;

        for(let i = 0; i < inputArr.length; i++) {

            if(!inputArr[i].value ||
                inputArr[i].value <= 0 ||
                inputArr[i].value >= tileCount ||
                checkForDupes.includes(inputArr[i].value)) {
                    goodToGo = false; break;}
            else { 
                checkForDupes.push(inputArr[i].value)
                colorInfoArr.push(new ColorInfo(
                    inputArr[i].getAttribute("data-R"),
                    inputArr[i].getAttribute("data-G"),
                    inputArr[i].getAttribute("data-B"),
                    inputArr[i].getAttribute("data-A"),
                    inputArr[i].value
                ))
            }
        } 
        
        if(goodToGo) {
            let infoTemp = infoObject;
            infoTemp.colorsArr = colorInfoArr;
            initNext(infoTemp);
        } else {
            colorInfoArr = [];
            alert("make sure that all fields are filled out, all IDs are within the valid range and all IDs are unique");
        }
    }
   
    return (
        <div className="tiledgen-color-table">
            <h1>assign IDs</h1>
            {infoObject.colorsArr.map(element => (
            <input key={Math.random() + Math.random() + Math.random()} type="number" className="tiledgen-color-input tiledgen-input-num"
            data-R={element.r} data-G={element.g} data-B={element.b} data-A={element.a}
            style={genColorStyling(element)}
            ></input>
            ))}
            <br></br>
            <button className="tiledgen-color-btn" onClick={() => { handleSubmit() }}>continue</button>
        </div>
    )
}


export default TiledGenColorTable;