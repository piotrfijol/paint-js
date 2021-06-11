import '../styles/css/App.css';
import logo from '../icons/logo.png';

function App() {
  return (
    <div className="container">
      <div className="frame-name">
        <div className="frame-name__content">
          <img src={logo} alt="logo" id="logo" className="icon" />
          <p>frameName - PaintJS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
