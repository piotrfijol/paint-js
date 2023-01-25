import '../styles/scss/Window.scss';
import logo from '../icons/logo.png';

function Window({title, children}) {

    return (
        <>
        <div className="frame-name">
            <div className="frame-name__content">
                <img src={logo} alt="logo" id="logo" className="icon" />
                <p>{title}</p>
            </div>
        </div>
        <div className="frame">
            {children}
        </div>
    </>
    ); 
}

export default Window;