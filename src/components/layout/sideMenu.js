import React, { Component, useState, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/drawer'
import List from '@material-ui/core/list'
import ListItem from '@material-ui/core/listItem'
import ListItemText from '@material-ui/core/listItemText'

class SideMenu extends Component{
  constructor(props){
    super(props)
    this.state={
      // isOpen: true,

    }
  }

  render(){
    // const [open, setOpen] = useState(false)
    const { classes, variant, toggleNav, isNavOpen } = this.props

    return(
      <Drawer
        variant={variant}
        open={isNavOpen}
        onClose={toggleNav}
      >
        <div></div>
        <List>
          <ListItem
            button
            // onClick={()=>setOpen(false)}
          >
            <ListItemText>Place 1</ListItemText>
          </ListItem>
          <ListItem
            button
            // onClick={()=>setOpen(false)}
          >
            <ListItemText>Place 2</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

export default withStyles()(SideMenu)