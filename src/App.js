import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

//material ui
import {withStyles} from '@material-ui/core/styles'

import './App.css';

//components
import Layout from './components/layout/layout'
import Lorem from './components/content/lorem'


const styles = theme => ({
  toolbarMargin: theme.mixins.toolbar
})

const App = withStyles(styles)(({classes}) =>(

  <div className="App">
    <Layout />

    <Switch>
      <Route exact path='/' component={Lorem} />
      <Route path='/there' />
      <Route path='/elsewhere' />
      {/* <Lorem /> */}

    </Switch>
    

  </div>


  ) 
)

export default App;
