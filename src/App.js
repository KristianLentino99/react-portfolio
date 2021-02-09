import logo from './logo.svg';
//import './App.css';
import './styles/App.scss';
import HeaderComponent from './components/Header/Header';
import HamburgerMenuComponent from './components/HamburgerMenu/HamburgerMenuComponent';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {

    
    setMenuOpen(!menuOpen);

  };

  return (
    
    <div className="App body-dark">
        <HeaderComponent onHamburgerClick={() => handleToggleMenu()} />
        <HamburgerMenuComponent menuOpen={menuOpen} onClose={() => handleToggleMenu()} />
        <div className="body container-fluid flex flex-1 flex-row ">
            <div className="flex flex-1 flex-column align-items-center   ">
                <h1 className="elegant-font mt-5">
                  <span className="line">Kristian Lentino</span>
                  <span className="line">Web developer</span>
                </h1>
            </div>

        </div> 
        <div className="footer flex flex-1 flex-row justify-content-around">
            <div className="flex flex-1">
              <p>@ Kristian Lentino  </p>
            </div>
            <ul className="footer-socials flex flex-1">
              <li>
                <a href="https://github.com/KristianLentino99" target='_blank'>Github</a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/kristian-lentino-941694166/" target='_blank'>Linkedin</a>
              </li>
            </ul>
        </div> 
    </div>
  ); 
}

export default App;
