import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'


class Footer extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const { classes } = this.props

        return(
            <div className={classes.root}>
                <AppBar position='static' className={classes.footer}>    
                    <div className={classes.content}>Footer</div>
                </AppBar>
            </div>

        )
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
    },
    footer: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    content:{
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: '3%',
        textAlign: 'left',
    }
})

export default withStyles(styles)(Footer)