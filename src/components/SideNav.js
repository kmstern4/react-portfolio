import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavTab from './styledComponents/StyledNavTab';
import StyledNav from './styledComponents/StyledNav';

const SideNav = () => {
    return <>
        <StyledNav>
            <Link to='/' className={window.location.pathname === '/' ? 'active' : ''}>
                <StyledNavTab>
                        About
                </StyledNavTab>
            </Link>
            <Link to='/projects' className={window.location.pathname === '/projects' ? 'active' : ''}>
                <StyledNavTab>
                    Projects
                </StyledNavTab>
            </Link>
            <Link to='/contact' className={window.location.pathname === '/contact' ? 'active' : ''}>
                <StyledNavTab>
                        Contact
                </StyledNavTab>
            </Link>
        </StyledNav>
    </>
}

export default SideNav;