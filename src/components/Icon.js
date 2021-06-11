import React from 'react'

export default function Icon({src: iconSrc, className}) {
    return (
        <div className={className + " toolbar__icon"}>
          <img src={iconSrc} className="icon" />
        </div>
    )
}
