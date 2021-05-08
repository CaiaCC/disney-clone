import React from 'react';
import { Login, Logo, Nav, NavMenu } from './StyledHeaderElement';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="ORIGINAL" />
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="MOVIE" />
                    <span>MOVIE</span>
                </a>
            </NavMenu>
            <Login>Login</Login>
        </Nav>
    );
}

export default Header
