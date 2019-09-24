import React, { Component } from 'react';

import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon, SwipeableDrawer } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';

//assets
import img from '../../assets/kitten-2-edited.png'
//components
import SideMenu from './sideMenu'

class Header extends Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    render(){
        const { classes } = this.props;

        return(
            <div>
                <AppBar position='sticky'>
                    <Toolbar >
                        <IconButton 
                            aria-label='Open drawer'
                            onClick={this.props.toggleNav}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <img src={img} alt='kitten photo' ></img>
                        <Typography>Material UI Practice Page</Typography>
                    </Toolbar>
                    
                </AppBar>
            </div>
        )
    }
}

const styles = theme => ({
    toolbarMargin: theme.mixins.toolbar
})

export default withStyles(styles)(Header)