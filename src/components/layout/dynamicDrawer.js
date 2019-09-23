import React, { Component, Fragment, useState } from 'react';

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon, SwipeableDrawer } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex:{
    flex: 1,
  },
  menuButton:{
    marginLeft:-12,
    marginRight:20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
})

const newToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
      <Fragment>
          <AppBar className={classes.aboveDrawer}>
              <Toolbar>
                  <IconButton
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='Menu'
                    onClick={onMenuClick}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography
                    className={classes.flex}
                  >
                      {title}
                  </Typography>
              </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
      </Fragment>
  )
)

const newDrawer = withStyles(styles) (
  ({ classes, variant, open, onClose, onItemClick }) => (
      <Drawer variant={variant} open={open} onClose={onClose}>
          <div 
          //includes classnames??
          />
          <List>
              <ListItem button onClick={onItemClick('Home')}>
                  <ListItemText>Home</ListItemText>
              </ListItem>

              <ListItem button onClick={onItemClick('Elsewhere')}>
                  <ListItemText>Elsewhere</ListItemText>
              </ListItem>
          </List>
      </Drawer>
  )
)

function DynamicDrawer({ classes, variant }) {
  const [drawer, setDrawer] = useState(false)
  const [title, setTitle] = useState('Home')

  const toggleDrawer = () =>{
    setDrawer(!drawer)
  }

  const onItemClick = title => () => {
    setTitle(title)
    SwipeableDrawer(variant === 'temporary' ? false : drawer)
  }

  return(
      <div>
          <newToolbar title={title} onMenuClick={toggleDrawer}/>
          <newDrawer 
              open={drawer}
              onClose={toggleDrawer}
              onItemClick={onItemClick}
              variant={variant}
          />
      </div>
  )
}

export default withStyles(styles)(DynamicDrawer)