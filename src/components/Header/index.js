import React from 'react';
import { Logo, Nav } from './StyledHeaderElement';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <img src ="/images/logo.svg" alt="Disney+"/>
            </Logo>
        </Nav>
    )
}

export default Header
