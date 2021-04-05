
function GetTMX(infoObj) {

    function genMapString() {
        let tmxStringTemp = ""
        let iterator = -1;
    
        for(let i = 0; i < infoObj.mapArr.length; i++) {
    
            iterator++;
            tmxStringTemp = tmxStringTemp.concat(",")
    
            if(iterator == infoObj.mapImage.width) {
                tmxStringTemp = tmxStringTemp.concat("\n")
                iterator = -1;
            }
    
            if(infoObj.mapArr[i].tileIndex == undefined) {
                tmxStringTemp = tmxStringTemp.concat("0");
            } else {
                tmxStringTemp = tmxStringTemp.concat(infoObj.mapArr[i].tileIndex.toString());
            }
        }
        return tmxStringTemp;
    }

    let tmxString = genMapString();
    tmxString = tmxString.substring(1);

    const tmxFull = `<?xml version="1.0" encoding="UTF-8"?>
    <map version="1.2" tiledversion="4.20" orientation="orthogonal" renderorder="right-down" width="${infoObj.mapImage.width}" height="${infoObj.mapImage.height}" tilewidth="${infoObj.tileWidth}" tileheight="${infoObj.tileHeight}" infinite="0" nextlayerid="2" nextobjectid="1">
    <tileset firstgid="1" source="${infoObj.outputTSXname}"/>
    <layer id="1" name="Bruh Layer 1" width="${infoObj.mapImage.width}" height="${infoObj.mapImage.height}">
    <data encoding="csv">
    ${tmxString}
    </data>
    </layer>
    </map>`

    return tmxFull;
 
}

export default GetTMX