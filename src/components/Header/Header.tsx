import React from 'react';
import logoImage from '../../assets/images/logo.png';

const Header: React.FC = () => {

    return (
        <header>
            <div className="container">
            
                <nav className="navbar navbar-expand-lg">
                    <div className="logo">
                        <a href="/">
                            <img data-testid="logImage" src={logoImage} alt="" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header
