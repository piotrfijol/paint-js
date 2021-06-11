import '../styles/css/App.css';
import Window from './Window';
import Toolbar from './Toolbar';



function App() {
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
            <Toolbar />
          </div>
          <div className="canvas">
            <canvas></canvas>
          </div>
        </div>
      </Window>
    </div>
  );
}

export default App;
