import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { MENU_VOICES } from '../../constants/menu';

const HamburgerMenuComponent = ({menuOpen,onClose}) => {

    let activeClass = menuOpen===true ? 'menu-open' : 'menu-close';

    return (
        <div className={`main-nav menu ${activeClass}`}>
            <div className="menu">
                
                <div className="hamburger-menu-close" >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="2x"
                      onClick={() => onClose()}
                    />
                </div> 
                <div className="menu-items">
                    {
                        MENU_VOICES.map((item,idx) => {

                            return (
                                <a className="item">{item.text}</a>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    );

}

export default HamburgerMenuComponent;