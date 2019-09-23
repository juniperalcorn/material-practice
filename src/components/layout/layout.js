import React, {Component, Fragment, useState} from 'react'

//material ui
import {withStyles} from '@material-ui/core/styles'

//components
import SideMenu from './sideMenu'
import Header from './header'

class Layout extends Component{
  constructor(props){
    super(props)
    this.state={
      isNavOpen: true,
    }
  }

  render(){
    return(
      <div>
        <Header />

        <div className='body'>
          <SideMenu />
        </div>
      </div>
    )
  }
}

export default withStyles()(Layout)