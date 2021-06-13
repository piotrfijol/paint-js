import React from 'react'

export default function Icon({src: iconSrc, className, toolName, selectedTool, onClick}) {

  let classes = className !== "" ? `${className} ` : "";
  classes += toolName === selectedTool ? "toolbar__icon--active " : "";

    return (
        <div className={classes + "toolbar__icon"} data-toolname={toolName} onClick={onClick}>
          <img src={iconSrc} className="icon" alt="icon"/>
        </div>
    )
}
