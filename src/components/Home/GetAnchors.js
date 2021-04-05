
function getAnchors() {

    const letterWidth = window.innerWidth * 0.16;
    const letterHeight = window.innerHeight * 0.4;
    const letterSpacing = window.innerHeight * 0.1;

    const originX = window.innerWidth * 0.11;
    const originY = window.innerHeight * 0.32;

    let currentOriginX = originX;

    const widthOffsetLow = letterWidth * 0.18
    const widthOffsetMedium = letterWidth * 0.5
    const widthOffsetHigh = letterWidth * 0.82

    const heightOffsetLow = letterHeight * 0.18
    const heightOffsetMedium = letterHeight * 0.5
    const heightOffsetHigh = letterHeight * 0.82

    function Pos(x, y) {
        this.x = x;
        this.y = y;
    }

    const anchorsH = [];

    const anchorsO = [];

    const anchorsM = [];

    const anchorsE = [];


    anchorsH.push(new Pos(currentOriginX, originY));

    anchorsH.push(new Pos(currentOriginX, originY + letterHeight));

    anchorsH.push(new Pos(currentOriginX, originY + heightOffsetMedium));

    anchorsH.push(new Pos(currentOriginX + letterWidth, originY + heightOffsetMedium));

    anchorsH.push(new Pos(currentOriginX + letterWidth, originY));

    anchorsH.push(new Pos(currentOriginX + letterWidth, originY + letterHeight));

        currentOriginX += letterWidth + letterSpacing;

    anchorsO.push(new Pos(currentOriginX, originY + heightOffsetMedium));

    anchorsO.push(new Pos(currentOriginX + widthOffsetLow, originY + heightOffsetHigh));

    anchorsO.push(new Pos(currentOriginX + widthOffsetMedium, originY + letterHeight));

    anchorsO.push(new Pos(currentOriginX + widthOffsetHigh, originY + heightOffsetHigh));

    anchorsO.push(new Pos(currentOriginX + letterWidth, originY + heightOffsetMedium));

    anchorsO.push(new Pos(currentOriginX + widthOffsetHigh, originY + heightOffsetLow));

    anchorsO.push(new Pos(currentOriginX + widthOffsetMedium, originY));

    anchorsO.push(new Pos(currentOriginX + widthOffsetLow, originY + heightOffsetLow));

        currentOriginX += letterWidth + letterSpacing;

    anchorsM.push(new Pos(currentOriginX, originY + letterHeight));
       
    anchorsM.push(new Pos(currentOriginX + widthOffsetLow, originY));

    anchorsM.push(new Pos(currentOriginX + widthOffsetMedium, originY + heightOffsetHigh));

    anchorsM.push(new Pos(currentOriginX + widthOffsetHigh, originY));

    anchorsM.push(new Pos(currentOriginX + letterWidth, originY + letterHeight));

        currentOriginX += letterWidth + letterSpacing;

    anchorsE.push(new Pos(currentOriginX, originY));

    anchorsE.push(new Pos(currentOriginX + letterWidth, originY));

    anchorsE.push(new Pos(currentOriginX, originY + letterHeight));

    anchorsE.push(new Pos(currentOriginX, originY + heightOffsetMedium));

    anchorsE.push(new Pos(currentOriginX + letterWidth, originY + heightOffsetMedium));

    anchorsE.push(new Pos(currentOriginX + letterWidth, originY + letterHeight));

    const anchorsArr = [anchorsH, anchorsO, anchorsM, anchorsE];
    return anchorsArr;
}

export default getAnchors