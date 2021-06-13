import React, { createRef, useEffect, useState } from 'react'

export default function Canvas({selectedTool: tool}) {

    const [isDragging, setDrag] = useState(false);
    const [offset, setOffset] = useState({x: null, y: null});
    const [ctx, setCtx] = useState(null);
    const [width, setWidth] = useState(250);
    const [height, setHeight] = useState(250);
    let canvasRef = createRef();
    let canvasWrapperRef = createRef();

    useEffect(() => {
      if(canvasRef.current) {
        setCtx(canvasRef.current.getContext("2d"));

        const el = canvasRef.current.getBoundingClientRect();
        setOffset({
          x: el.left,
          y: el.top
        });
      }
    }, []);

    const handleCanvasMouseDown = e => {
      setDrag(true);
      ctx.beginPath();
      ctx.moveTo(e.clientX - offset.x, e.clientY - offset.y);
    }

    const handleCanvasMouseUp = e => {
      setDrag(false);
    }


    const handleMouseMove = e => {
      if(ctx !== null && isDragging === true) {
        ctx.lineTo(e.clientX - offset.x, e.clientY - offset.y);
        ctx.stroke();
      }
    }

    const handleResize = (item, e) => {
      if(item.contains("y-resize"))
        setHeight(e.clientY-offset.y);
      else if(item.contains("xy-resize")) {
        setHeight(e.clientY-offset.y);
        setWidth(e.clientX-offset.x);
      } else if (item.contains("x-resize")) {
        setWidth(e.clientX-offset.x);
      }
    }

    let handler;

    const startResizingY = e => {
      e.preventDefault();
      handler = handleResize.bind(null, e.target.classList);
      window.addEventListener('mousemove', handler);
      window.addEventListener('mouseup', finishResizing);
    }

    const startResizingX = e => {
      e.preventDefault();
      handler = handleResize.bind(null, e.target.classList);
      window.addEventListener('mousemove', handler);
      window.addEventListener('mouseup', finishResizing);
    }

    const startResizingXY = e => {
      e.preventDefault();
      handler = handleResize.bind(null, e.target.classList);
      window.addEventListener('mousemove', handler);
      window.addEventListener('mouseup', finishResizing);
    }

    const finishResizing = e => {
      window.removeEventListener('mousemove', handler);
      window.removeEventListener('mouseup', finishResizing);
    }

    return (
        <div className="canvas-container"  onMouseUp={handleCanvasMouseUp}   >
          <div width={width} height={height} ref={canvasWrapperRef} className="canvas" >
            <canvas width={width} height={height} ref={canvasRef} 
              onMouseDown={handleCanvasMouseDown} 
              onMouseMove={handleMouseMove}
              onMouseOut={handleCanvasMouseUp}
            />
            
          <div className="y-resize resize" 
            style = {{
              left: width/2,
              top: height+8
            }}
            onMouseDown={startResizingY}
          />
          <div className="xy-resize resize" 
            style = {{
              left: width,
              top: height+8
            }}
            onMouseDown={startResizingXY}
          />
          <div className="x-resize resize" 
            style = {{
              left: width+8,
              top: height/2
            }}
            onMouseDown={startResizingX}
          />
          </div>
        </div>
    )
}
