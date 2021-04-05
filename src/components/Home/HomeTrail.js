import { useRef, useEffect, useState } from "react";

function HomeTrail() {

    const canvasRef = useRef(null);
    const framerate = 5;

    let opacity = 0.005;

    let posX;
    let posY;

    let velX = 0.5;
    let velY = 0.5;

    let fontSize = 64;

    let r;
    let g;
    let b;

    let colorIterator = 0;


    useEffect(() => {
       
        const appDiv = document.getElementsByClassName("app-div")[0];

        canvasRef.current.height = window.innerHeight;
        canvasRef.current.width = window.innerWidth;
      
        posX = canvasRef.current.width / 2;
        posY = canvasRef.current.height / 2;

        velX = Math.random(0.5) * 2;

        if(Math.random() >= 0.5) {velX *= -1};
        if(Math.random() >= 0.5) {velY *= -1};

        fontSize = ((canvasRef.current.width + canvasRef.current.height) / 2) / 8;

        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        const ctx = canvasRef.current.getContext("2d");
    
            const interval = setInterval(() => {
                draw(ctx);
            }, framerate); 
    
            return () => {
                clearInterval(interval);
            }  
        }, [])


        function draw(ctx) {
            if(posX >= canvasRef.current.width - fontSize * 2.92 || posX <= 0) {
                velX *= -1;
            }
            
            if(posY >= canvasRef.current.height || posY <= fontSize * 0.74) {
                velY *= -1;
            } 

            if(colorIterator >= 150) {
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);
                colorIterator = 0;
            }

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("HOME", posX, posY);

                posX += velX;
                posY += velY;

                colorIterator++;

        }

        function applyFade(ctx) {
            opacity += 0.001
            if(opacity >= 0.05) { opacity = 0.001 }
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }


    return (
        <canvas className="home-canvas" ref={canvasRef}/> 
    )
}

export default HomeTrail;