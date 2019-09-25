import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

//material ui
import {withStyles} from '@material-ui/core/styles'

import './App.css';

//components
import Layout from './components/layout/layout'
import Lorem from './components/content/lorem'
import There from './components/content/there'
import Elsewhere from './components/content/elsewhere'

const styles = theme => ({
  toolbarMargin: theme.mixins.toolbar
})

const App = withStyles(styles)(({classes}) =>(

  <div className="App">
    <Layout />

    <Switch>
      <Route exact path='/' component={Lorem} />
      <Route path='/there' component={There}/>
      <Route path='/elsewhere' component={Elsewhere}/>
    </Switch>
    

  </div>


  ) 
)

export default App;
