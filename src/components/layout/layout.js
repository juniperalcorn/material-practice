import React, {Component, Fragment, useState} from 'react'

//material ui
import {withStyles} from '@material-ui/core/styles'

//components
import SideMenu from './sideMenu'
import Header from './header'
import Footer from './footer'

class Layout extends Component{
  constructor(props){
    super(props)
    this.state={
      isNavOpen: false,
    }
  }

  _toggleIsNavOpen = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }

  render(){
    const { classes, theme, location } = this.props
    return(
      <div>
        <Header 
          isNavOpen={this.state.isNavOpen}
          toggleNav={this._toggleIsNavOpen.bind(this)}
          drawerWidth={240}
        />

        <div className='body'>
          <SideMenu 
            isNavOpen={this.state.isNavOpen}
            toggleNav={this._toggleIsNavOpen.bind(this)}
            drawerWidth={240}
            // path={location.pathname}
          />
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles()(Layout)