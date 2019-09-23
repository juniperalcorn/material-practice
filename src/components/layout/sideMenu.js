import React, { Component, useState, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/drawer'
import List from '@material-ui/core/list'
import ListItem from '@material-ui/core/listItem'
import ListItemText from '@material-ui/core/listItemText'

class SideMenu extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <Drawer>
        <div></div>
        <List>
          <ListItem>
            <ListItemText>Place 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Place 2</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

export default withStyles()(SideMenu)