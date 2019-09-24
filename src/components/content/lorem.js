import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { classes } from 'istanbul-lib-coverage'

class Lorem extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const {classes} = this.props
    return(
      <Box className={classes.box}>
        Cos’è Lorem Ipsum?
        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
      </Box>
    )
  }
}

const styles = theme =>({
  box:{
    toolbarMargin: theme.mixins.toolbar
  }
})

export default withStyles()(Lorem)