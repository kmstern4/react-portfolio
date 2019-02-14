import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavTab from './styledComponents/StyledNavTab';
import StyledNav from './styledComponents/StyledNav';

const SideNav = () => {
    return <>
        <StyledNav>
            <StyledNavTab>
                <Link to='/' className={window.location.pathname === '/' ? 'active' : ''}>
                    About
                </Link>
            </StyledNavTab>
            <StyledNavTab>
                <Link to='/projects' className={window.location.pathname === '/projects' ? 'active' : ''}>
                    Projects
                </Link>
            </StyledNavTab>
            <StyledNavTab>
                <Link to='/contact' className={window.location.pathname === '/contact' ? 'active' : ''}>
                    Contact
                </Link>
            </StyledNavTab>
        </StyledNav>
    </>
}

export default SideNav;