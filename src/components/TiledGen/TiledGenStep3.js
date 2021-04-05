import { useEffect } from "react"
import GetTMX from "./GetTMX"

function TiledGenStep3( { infoObject, initFinal } ) {

    let infoObj = infoObject;
    let tmxString;
    let tsxString;

    useEffect(() => {

        assignIDtoTiles();
        tmxString = GetTMX(infoObj);
        
        let tileColumns = infoObj.tilesetImage.width / infoObj.tileWidth;
        let tileCount = tileColumns * (infoObj.tilesetImage.height / infoObj.tileHeight);

        tsxString = `<?xml version="1.0" encoding="UTF-8"?>
        <tileset version="1.2" tiledversion="4.20" name="${infoObj.outputTSXname.substring(0, infoObj.outputTSXname.length - 4)}" tilewidth="${infoObj.tileWidth}" tileheight="${infoObj.tileHeight}" tilecount="${tileCount}" columns="${tileColumns}">
         <image source="${infoObj.tilesetName}" width="${infoObj.tilesetImage.width}" height="${infoObj.tilesetImage.height}"/>
        </tileset>`
        initFinal(tmxString, tsxString);

    }, [])

    function assignIDtoTiles() {

        for(let i = 0; i < infoObj.mapArr.length; i++) {
    
            infoObj.mapArr[i].tileIndex = getTileID(infoObj.mapArr[i])
           
        }
    }
    
    
    function getTileID(currentTile) {
    
        for(let i = 0; i < infoObj.colorsArr.length; i++) {
            if(
                infoObj.colorsArr[i].r == currentTile.r &&
                infoObj.colorsArr[i].g == currentTile.g &&
                infoObj.colorsArr[i].b == currentTile.b
            ) {
                return infoObj.colorsArr[i].ID;
            }
        }
    
    }

    return(
        <>
        </>
    )
}

export default TiledGenStep3