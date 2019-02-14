import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StyledMenu from './styledComponents/StyledMenu';
import StyledMenuItem from './styledComponents/StyledMenuItem';

class MobileNav extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        if (!this.state.showMenu) {
            this.setState({ 
                showMenu: true
            });
        } else {
            this.setState({
                showMenu: false
            });
        }
    }

    render() {
        return <>
            <StyledMenu onClick={this.showMenu}>Menu</StyledMenu>
            {
                this.state.showMenu
                ? (
                    <div className='menu'>
                        <StyledMenuItem onClick={this.showMenu}>
                            <Link to='/'>
                                Home
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={this.showMenu}>
                            <Link to='/projects'>
                                Projects
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={this.showMenu}>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </StyledMenuItem>
                    </div>
                ) : (
                    null
                )
            }
        </>
    }
}

export default MobileNav;