import React from 'react';
import { Route, Link } from 'react-router-dom'

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
    <Lorem />

  </div>


  ) 
)

export default App;
