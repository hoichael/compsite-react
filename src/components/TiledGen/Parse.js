
function parse(image, ctx, which) {
    let arr = [];
    let colorsArr = [];
    const vRows = image.height;
    const hRows = image.width;

    function Tile(r, g, b, a, posX, posY, tileIndex) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.posX = posX;
        this.posY = posY;
        this.tileIndex = tileIndex;
    }
    
    function RGBAkeyOBJECT(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    
    ctx.drawImage(image, 0, 0);

    for(let iY = 0; iY < vRows; iY++) {
        for(let i = 0; i < hRows; i++) {
            let colorR = ctx.getImageData(i, iY, 1, 1).data[0];
            let colorG = ctx.getImageData(i, iY, 1, 1).data[1];
            let colorB = ctx.getImageData(i, iY, 1, 1).data[2];
            let colorA = ctx.getImageData(i, iY, 1, 1).data[3];

            arr.push(new Tile(colorR, colorG, colorB, colorA, i, iY));

            let rgbaKey = new RGBAkeyOBJECT(colorR, colorG, colorB, colorA);

            let push = true;

            for(let i  = 0; i < colorsArr.length; i++) {
                if(colorsArr[i]) {
                    if(colorsArr[i].r === rgbaKey.r &&
                       colorsArr[i].g === rgbaKey.g &&
                       colorsArr[i].b === rgbaKey.b &&
                       colorsArr[i].a === rgbaKey.a) {
                       push = false;
                       i = colorsArr.length; 
                    }
                }
            }

            if(push && rgbaKey.a !== 0) {
                colorsArr.push(rgbaKey);
            }

        }
    }

    if(which === "mapArr" || which  === "tilesetArr") { return arr } else { return colorsArr };
}

export default parse