import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader' 
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'

class Lorem extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const {classes} = this.props
    return(

      <div >
        <Paper className={classes.paper}>
          <Card className={classes.card}>
            <CardHeader title='Lorem Ipsum' />
            <CardContent>
              <Typography>
                Cos’è Lorem Ipsum?
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
              </Typography>
            </CardContent>

          </Card>

          <Card className={classes.card}>
            <CardHeader title='Lorem Ipsum'>
            </CardHeader>
            <CardContent>
              <Typography>
                Cos’è Lorem Ipsum?
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
              </Typography>
            </CardContent>

          </Card>

        </Paper>
      </div>
    )
  }
}

const styles = theme =>({
  paper:{
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    margin: '3%',
    height: '70vh',
  },
  card:{
    // toolbarMargin: theme.mixins.toolbar,
    width: '50%',
    margin: '2%',
  },
  content:{
    justifyContent: 'justify',
  }
})

export default withStyles(styles)(Lorem)