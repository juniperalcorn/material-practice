import React, { Component, useState, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/drawer'
import List from '@material-ui/core/list'
import ListItem from '@material-ui/core/listItem'
import ListItemText from '@material-ui/core/listItemText'

class SideMenu extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    const { classes, variant, toggleNav, isNavOpen } = this.props

    return(
      <Drawer
        variant={variant}
        open={isNavOpen}
        onClose={toggleNav}
      >
        <List>
          <ListItem
            button
            onClick={toggleNav}
          >
            <ListItemText><NavLink to='/there'>There</NavLink></ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={toggleNav}
          >
            <ListItemText><Link to='/elsewhere'>Elsewhere</Link></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

export default withStyles()(SideMenu)