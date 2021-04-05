import { useRef, useEffect } from "react"

function TiledGenRefCan( { infoObject } ) {

    const canvasRef = useRef(null);

    let maxWidth;
    let maxHeight;

    let mapScale;
    let tilesetScale;

    let mapPosX;
    let mapPosY;
    let tsPosX;
    let tsPosY;

    let ctx = useRef()

    useEffect(() => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx.current = canvasRef.current.getContext("2d");

        window.addEventListener('resize', handleResize)

        setValues();

        draw(infoObject.tilesetImage, ctx.current, tilesetScale, infoObject.tilesetArr, tsPosX, tsPosY, true);
        draw(infoObject.mapImage, ctx.current, mapScale, infoObject.mapArr, mapPosX, mapPosY, false);
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    function handleResize() {
        if(ctx.current) {
        ctx.current.clearRect(0, 0, 3000, 3000);

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx.current = canvasRef.current.getContext("2d");

        setValues();

        draw(infoObject.tilesetImage, ctx.current, tilesetScale, infoObject.tilesetArr, tsPosX, tsPosY, true);
        draw(infoObject.mapImage, ctx.current, mapScale, infoObject.mapArr, mapPosX, mapPosY, false);
        }
    }



    function determineScale(image) {
        let counter = 0;
        let stepRef = 1;
        
        while(counter * image.width < maxWidth && counter * image.height < maxHeight) {
            counter += stepRef;
        } 
        
        if(counter <= 0) {
            counter = 1;
        }
        
        return Math.floor(counter);
    } 

    function draw(image, ctx, scale, arr, X, Y, isTileset) {
        let vRows = image.height;
        let hRows = image.width;
        let iterator = 0;
        let xPos = X;
        let yPos = Y;
    
        for(let iY = 0; iY < vRows; iY++) {
            for(let i = 0; i < hRows; i++) {
                ctx.fillStyle = `rgb(${arr[iterator].r}, ${arr[iterator].g}, ${arr[iterator].b})`;
                ctx.fillRect(xPos + scale * i, yPos, scale, scale);
                iterator++;
            } 
            yPos += scale; 
        }

        if(isTileset) {
            let hTiles = image.width / infoObject.tileWidth;
            let vTiles = image.height / infoObject.tileHeight;

            for (let i = 0; i < hTiles + 1; i++) {
                ctx.beginPath();
                ctx.moveTo(X + (i * scale) * infoObject.tileWidth, Y);
                ctx.lineTo(X + (i * scale) * infoObject.tileWidth, Y + (vTiles * scale) * infoObject.tileHeight);
                ctx.strokeStyle = "rgb(255, 255, 255)"
                ctx.lineWidth = "2"
                ctx.stroke();
            } 

            for (let i = 0; i < vTiles + 1; i++) {
                ctx.beginPath();
                ctx.moveTo(X, Y + (i * scale) * infoObject.tileHeight);
                ctx.lineTo(X + (hTiles * scale) * infoObject.tileWidth, Y + (i * scale) * infoObject.tileHeight);
                ctx.strokeStyle = "rgb(255, 255, 255)"
                ctx.lineWidth = "2"
                ctx.stroke();
            }

            let iterator = 1;
            scale = tilesetScale * infoObject.tileWidth;
            yPos = Y + scale * 0.68;
            xPos = X + scale * 0.38;
            let fontSize = Math.round(window.innerWidth + window.innerHeight) / 40
            
            for(let iY = 0; iY < vTiles; iY++) {
                for(let i = 0; i < hTiles; i++) {
                    ctx.fillStyle = "white";
                    ctx.font = `${fontSize}px Arial`;
                    ctx.fillText(iterator, xPos, yPos);
                    iterator++;
                    xPos += scale;
                }
                xPos = X + scale * 0.38;
                yPos += scale; 
                } 
            }
            
        }

    function setValues() {
        maxWidth = window.innerWidth * 0.6;
        maxHeight = window.innerHeight * 0.35;
    
        tsPosX = Math.round(window.innerWidth * 0.4);
        mapPosX = Math.round(window.innerWidth * 0.4);
        tsPosY = Math.round(window.innerHeight * 0.06);
        mapPosY = Math.round(window.innerHeight * 0.46);
    
        tilesetScale = determineScale(infoObject.tilesetImage);
        mapScale = determineScale(infoObject.mapImage);
    }


   
    return (
        <div className="tiledgen-reference-canvases-div">
            <canvas className="tiledgen-reference-canvas" ref={canvasRef}></canvas>
        </div>
    )
}


export default TiledGenRefCan;