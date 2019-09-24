import React from 'react';
import { Route, Link } from 'react-router-dom'

//material ui
import {withStyles} from '@material-ui/core/styles'

import './App.css';

//components
import Layout from './components/layout/layout'


const styles = theme => ({
  toolbarMargin: theme.mixins.toolbar
})

const App = withStyles(styles)(({classes}) =>(

  <div className="App">
    <Layout />
    <div className={classes.toolbarMargin}>
      Cos’è Lorem Ipsum?
      Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
    </div>

  </div>


  ) 
)

export default App;
