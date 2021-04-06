import { useRef, useEffect } from "react";


function Transition() {

    const canvasRef = useRef(null);
    const framerate = 5;

    let opacity = 0;
    let opacityStep = 0.005;

    let peakIterator = 0;
    let fadeout = false;

    useEffect(() => {

            const interval = setInterval(() => {
                draw();
            }, framerate); 
    
            return () => {
                clearInterval(interval);
            }
    
        }, [])

        function draw() {

            if(!canvasRef.current) { return };

            canvasRef.current.width = window.innerWidth + 50;
            canvasRef.current.height = window.innerHeight + 50;
            const ctx = canvasRef.current.getContext("2d");

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            if(opacity >= 1) {
                fadeout = true;
                peakIterator++;
            }

            if(fadeout && peakIterator >= 50) {
                opacity -= opacityStep;
            } else {
                opacity += opacityStep;
            }
        }

    return (
        <div className="transition-overlay" style={{
            width: window.innerWidth, 
            height: window.innerHeight, }}>
           <canvas ref={canvasRef}/> 
        </div>
    )
}

export default Transition;