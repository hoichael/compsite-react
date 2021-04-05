import {useRef, useEffect} from "react"
import parse from "./Parse"

function TiledGenParsingCanvas( {infoObject, returnNewInfoObject} ) {
    const canvasRef = useRef(null);
    const newInfoObject = infoObject;

    useEffect(() => {

    canvasRef.current.width = 1000;
    canvasRef.current.height = 1000;
    const ctx = canvasRef.current.getContext("2d");

    newInfoObject.mapArr = parse(newInfoObject.mapImage, ctx, "mapArr");
    ctx.clearRect(0, 0, 1000, 1000);
    newInfoObject.tilesetArr = parse(newInfoObject.tilesetImage, ctx, "tilesetArr");
    ctx.clearRect(0, 0, 1000, 1000);
    newInfoObject.colorsArr = parse(newInfoObject.mapImage, ctx, "bruh");
    ctx.clearRect(0, 0, 1000, 1000);

    returnNewInfoObject(newInfoObject);

    }, [])



    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default TiledGenParsingCanvas