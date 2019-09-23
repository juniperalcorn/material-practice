import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon, SwipeableDrawer } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

//assets
import img from '../../assets/kitten-2-edited.png'
//components
import SideMenu from './sideMenu'

class Header extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // anchorEl: null,
            // isNavOpen: false,
        }
        // this.toggleNav = this.toggleNav.bind(this)
        // this.handleMenuClose=this.handleMenuClose.bind(this)
    }

    // toggleNav = () => {
    //     this.setState({ isNavOpen: !this.state.isNavOpen })
    // }

    // handleMenuClose = () => {
    //     this.setState({anchorEl: null})
    // }

    render(){
        const { classes } = this.props;
        // const isMenuOpen = Boolean(this.state.anchorEl)

        // const renderMenu = (
        //     <Menu
        //         anchorEl={this.state.anchorEl}
        //         open={isMenuOpen}
        //         onClose={this.handleMenuClose}
        //     >
        //         <MenuItem>Hello</MenuItem>
        //         <MenuItem>World</MenuItem>
        //     </Menu>
        // )


        return(
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={this.toggleNav}>
                            <MenuIcon/>
                        </IconButton>
                        <img src={img} alt='kitten photo'></img>
                        <span>Material UI Practice Page</span>
                    </Toolbar>
                    
                </AppBar>
            </div>
        )
    }
}

export default withStyles()(Header)