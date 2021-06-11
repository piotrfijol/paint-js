import '../styles/css/App.css';
import logo from '../icons/logo.png';
import Window from './Window';

function App() {
  return (
    <div className="container">
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
      </Window>
    </div>
  );
}

export default App;
