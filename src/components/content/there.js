import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import AppBar from '@material-ui/core/AppBar'


class There extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const {classes} = this.props

    return(
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Tabs>
            <Tab label='Here'/>
            <Tab label='Over There'/>
          </Tabs>
        </AppBar>

        
      </div>
    )
  }
}

const styles = theme => ({
  root:{
    background: 'blue',
    color: 'red',
  },
  appBar:{
    top: '10vh',
    background: '#F5F5F7',
    color: 'black'
  }
})

export default withStyles(styles)(There)