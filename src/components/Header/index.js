import React from 'react';
import { Logo, Nav, NavMenu } from './StyledHeaderElement';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <img src ="/images/logo.svg" alt="Disney+"/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                <span>HOME</span>
                </a>
            </NavMenu>
        </Nav>
    )
}

export default Header
