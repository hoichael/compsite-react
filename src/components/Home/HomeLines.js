import { useRef, useEffect, useState } from "react";
import getAnchors from "./GetAnchors"

function HomeLines() {

    const canvasRef = useRef(null);
    let ctx;
    const framerate = 120;

    const pairsH = [[0, 1], [2, 3], [4, 5]];
    const pairsO = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]];
    const pairsM = [[0, 1], [1, 2], [2, 3], [3, 4]];
    const pairsE = [[0, 1], [0, 2], [3, 4], [2, 5]];

    const pairsArr = [pairsH, pairsO, pairsM, pairsE];

    let anchorsArr;

    let offsetRangeX;
    let offsetRangeY;

    function Line(xFrom, yFrom, xTo, yTo) {
        this.xFrom = xFrom;
        this.yFrom = yFrom;
        this.xTo = xTo;
        this.yTo = yTo;
    }

    let lineArr = [];

    
    function setAnchors() {
        anchorsArr = getAnchors();
        offsetRangeX = window.innerWidth * 0.01;
        offsetRangeY = window.innerHeight * 0.01;
    }



    useEffect(() => {

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx = canvasRef.current.getContext("2d");

        setAnchors();

        const interval = setInterval(() => {
            if(!canvasRef.current) { return };
            draw();
        }, framerate);

        return () => {
            clearInterval(interval);
        } 


    }, [])

    function getOffset(value, range) {
        
        let offset = (Math.random() * range)
        if(Math.random() > 0.5) { offset *= -1};
        return value + offset;
    }

        
    function draw() {

        ctx.clearRect(0, 0, 3000, 3000);

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        ctx = canvasRef.current.getContext("2d");

        setAnchors();

        lineArr = [];

        for(let i = 0; i < anchorsArr.length; i++) {
 
            for(let i2 = 0; i2 < pairsArr[i].length; i2++) {
                
                lineArr.push(new Line(getOffset(anchorsArr[i][pairsArr[i][i2][0]].x, offsetRangeX),    // xFrom
                                      getOffset(anchorsArr[i][pairsArr[i][i2][0]].y, offsetRangeY),    // yFrom
                                      getOffset(anchorsArr[i][pairsArr[i][i2][1]].x, offsetRangeX),    // xTo
                                      getOffset(anchorsArr[i][pairsArr[i][i2][1]].y, offsetRangeY)));  // yTo
            }
        }

        let lineWidth;

        if(window.innerWidth > 500 && window.innerWidth < 1000) {
            lineWidth = "2"
        } else if(window.innerWidth >= 1000) {
            lineWidth = "3"
        } else {
            lineWidth = "1"
        };

        for(let i = 0; i < lineArr.length; i++) {
            ctx.beginPath();
            ctx.moveTo(lineArr[i].xFrom, lineArr[i].yFrom);
            ctx.lineTo(lineArr[i].xTo, lineArr[i].yTo);
            ctx.strokeStyle = "black";
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }

    }


    return (
        <canvas className="home-canvas" ref={canvasRef}/> 
    )
}

export default HomeLines;


       // loop through all pairs
    /*  for(let i = 0; i < anchorsArr.length; i++) {
            console.log("layer 1")
            for(let i2 = 0; i2 < pairsArr[i].length; i2++) {
                console.log("layer 2")
                console.log(pairsArr[i][i2][0], pairsArr[i][i2][1]);
            }
        }        



        // gen lines directly from anchors
         for(let i = 0; i < anchorsArr.length; i++) {
            console.log("enter layer 1")
            for(let i2 = 0; i2 < pairsArr[i].length; i2++) {
                console.log("enter layer 2")
                console.log(pairsArr[i][i2][0], pairsArr[i][i2][1]);
                console.log(anchorsArr[i][pairsArr[i][i2][0]].x, anchorsArr[i][pairsArr[i][i2][0]].y);
                console.log(anchorsArr[i][pairsArr[i][i2][1]].x, anchorsArr[i][pairsArr[i][i2][1]].y);
                
                lineArr.push(new Line(anchorsArr[i][pairsArr[i][i2][0]].x,    // xFrom
                                      anchorsArr[i][pairsArr[i][i2][0]].y,    // yFrom
                                      anchorsArr[i][pairsArr[i][i2][1]].x,    // xTo
                                      anchorsArr[i][pairsArr[i][i2][1]].y));  // yTo
            }
        } */