import React, { createRef, useEffect, useState } from 'react'

export default function Canvas({selectedTool: tool}) {

    const [isDragging, setDrag] = useState(false);
    let canvasRef = createRef();
    let ctx = createRef();

    useEffect(() => {
      if(canvasRef.current) {
        ctx.current = canvasRef.current.getContext("2d");
      }
    }, []);

    const handleClick = e => {
      setDrag(!isDragging);
      console.log(isDragging);
    }

    const handleMouseMove = e => {
      console.log("tak")
      if(ctx.current !== null && isDragging === true) {
        ctx.current.fillStyle = "green";
        ctx.current.fillRect(0, 0, 250, 250);
      }
    }

    return (
        <div className="canvas">
          <canvas ref={canvasRef} onClick={handleClick} onMouseMove={handleMouseMove}></canvas>
        </div>
    )
}
