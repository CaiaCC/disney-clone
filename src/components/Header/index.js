import React from 'react';
import { Logo, Nav, NavMenu } from './StyledHeaderElement';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <img src ="/images/logo.svg" alt="Disney+"/>
            </Logo>
            <NavMenu>menu</NavMenu>
        </Nav>
    )
}

export default Header
