import React from 'react'
import eraserIcon from '../icons/erase.png'
import selectIcon from '../icons/select.png'
import rectSelectIcon from '../icons/rectSelect.png'
import bucketIcon from '../icons/bucket.png'
import pencilIcon from '../icons/pencil.png'
import brushIcon from '../icons/brush.png'
import sprayIcon from '../icons/spray.png'
import textIcon from '../icons/text.png'
import drawLineIcon from '../icons/drawLine.png'
import drawCurveIcon from '../icons/drawCurve.png'
import zoomIcon from '../icons/zoom.png'
import pickColorIcon from '../icons/pickColor.png'
import drawRectIcon from '../icons/drawRect.png'
import drawEllipseIcon from '../icons/drawEllipse.png'
import Icon from './Icon';
import '../styles/css/Toolbar.css';

export default function Toolbar() {
    return (
        <div className="toolbar">
            <Icon className={"toolbar__icon--active"} src={selectIcon} />
            <Icon src={rectSelectIcon} />
            <Icon src={eraserIcon} />
            <Icon src={bucketIcon} />
            <Icon src={pickColorIcon} />
            <Icon src={zoomIcon} />
            <Icon src={pencilIcon} />
            <Icon src={brushIcon} />
            <Icon src={sprayIcon} />
            <Icon src={textIcon} />
            <Icon src={drawLineIcon} />
            <Icon src={drawCurveIcon} />
            <Icon src={drawRectIcon} />
            <Icon src={drawEllipseIcon} />
        </div>
    )
}
