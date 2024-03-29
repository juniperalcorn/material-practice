import React, {Component} from 'react'


import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import AppBar from '@material-ui/core/AppBar'

import moment from 'moment'
import timezone from 'moment-timezone'



function TabPanel(props){
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box style={{marginTop: '40vh'}} p={3}>{children}</Box>
    </Typography>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function checkTime() {
  // moment().format('MMM, DD, YYYY h:mm:ss a')
  moment().format('lll')
  const givenDate='2019-04-29T20:15:35.890361Z'
  let showDate = moment(givenDate).format('lll')

  
  let zone = moment(givenDate).tz('UTC').format('z')

  let stackOverflow = moment(givenDate).toString()
  console.log('stack', stackOverflow)

  let current = moment().tz('')
  console.log('given date timezone', zone)
  console.log('given date formatted', showDate)
}


class There extends Component {
  constructor(props){
    super(props)
    this.state={
      value: null,
    }
  }

  render(){
    const {classes} = this.props
    const {value} = this.state
    checkTime()

    const handleChange = (event, newValue) => {
      this.setState({value: newValue})
    }

    return(
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Tabs value={value} onChange={handleChange} aria-label='tabs'>
            <Tab label='Here'{...a11yProps(0)} />
            <Tab label='Over There' {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          First check here
        </TabPanel>

        <TabPanel value={value} index={1}>
          Then check over there
        </TabPanel>
        
      </div>
    )
  }
}

///put class onto tab or tab panel?? seems to display but can't see it

const styles = theme => ({
  root:{
    top: '20vh',
    background: 'blue',
    color: 'red',
  },
  appBar:{
    top: '10vh',
    background: '#F5F5F7',
    color: 'black'
  },
  panel:{
    top: '40vh',
  }
})

export default withStyles(styles)(There)