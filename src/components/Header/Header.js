import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const HeaderComponent = ({onHamburgerClick}) => {

    return(
        <header className="App-header">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1160 320"><path fill="#000b76" fillOpacity    ="1" d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,245.3C840,277,960,299,1080,293.3C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className="hamburger-menu">
                <FontAwesomeIcon onClick={() => onHamburgerClick()} icon={faBars} size="2x" className="text-white" />
            </div>
        </header>
    )

};

export default  HeaderComponent;