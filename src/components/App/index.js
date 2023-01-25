import '../styles/scss/App.scss';
import Window from '../Window';
import Toolbar from '../Icon/Toolbar/Toolbar';
import Canvas from '../Canvas';
import { useState } from 'react';



function App() {

  const [tool, setTool] = useState("");

  const chooseTool = e => {
    e.stopPropagation();
    setTool(e.currentTarget.dataset.toolname);
  }

  const generateColors = () => {
    let colors = [];
    for(let i=0; i<28; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colors.push(<div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}} className="colors__palette__color" data-palette-color={i}></div>);
    }

    return colors;
  }

  return (
    <div className="wrapper">
      <Window title="Bez tytulu - PaintJS">
        <div className="navbar">
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Image</li>
            <li>Colors</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="container">
          <div className="aside">
            <Toolbar selectedTool={tool} onClick={chooseTool}/>
            <div className="additional-options"></div>
          </div>
          <Canvas selectedTool={tool}/>
        </div>
        <div className="bottom-section">
          <div className="colors">
            <div className="colors__picked-colors">
              <div className="colors__picked-colors__primary-color"></div>
              <div className="colors__picked-colors__secondary-color"></div>
            </div>
            <div className="colors__palette">
              {generateColors()}
            </div>
          </div>
          <div className="hint">
            <p>For Help, click Help Topics on the Help Menu.</p>
          </div>
        </div>
      </Window>
    </div>
  );
}

export default App;
