import React from 'react'
import Icon from './Icon';
import '../styles/css/Toolbar.css';
import { iconNames, icons } from '../data/iconData';

export default function Toolbar({onClick: setTool, selectedTool}) {



    return (
        <div className="toolbar">
            {icons.map((icon, id) => <Icon selectedTool={selectedTool} key={id} toolName={iconNames[id]} src={icon} onClick={setTool} />)}
        </div>
    )
}
