import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader' 
import CardContent from '@material-ui/core/CardContent'
import { typography } from '@material-ui/system'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

import classNames from 'classnames'

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
            <CardMedia
              className={classes.media1}
              image='https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg'
              title='orange cat'
            />
            <CardHeader title='Lorem Ipsum' />
            <CardContent>
              <Typography align='left' paragraph='true'>
                Cos’è Lorem Ipsum?
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
              </Typography>
            </CardContent>

          </Card>

          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography className={classes.right}>Cos’è Lorem Ipsum?</Typography>
              <Typography className={classes.right}>
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
              </Typography>
              <CardMedia 
                marginTop='10px'
                className={classNames(classes.media1, classes.media2)}
                image='https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg'
                title='orange cat'
              />
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
    width: '50%',
    margin: '2%',
    overflowY: 'scroll',
  },
  media1:{
    minWidth:'100%',
    minHeight: '250px'
  },
  media2:{
    borderRadius: '50%',
    '&:hover': {
      sepia: '100%',
      border: '3px dashed purple',
      opacity: '.5',
    }
  },
  content:{
    textAlign: 'right',
  },
  right:{
    marginBottom: '10px',
  }
})

export default withStyles(styles)(Lorem)