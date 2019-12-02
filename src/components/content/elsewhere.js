import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'

import Shortcut from '../shortcut'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import * as tableau from 'tableau-api';  

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const shortcuts = {
//   selectInList(event){
//     if (event.key !=='h') return false
//     return true
//   }
// }

// let registeredShortcuts;

// const handleKeyDown = event => {  
//   for (let i = 0; i < registeredShortcuts.length; i += 1) {    
//     const shortcut = registeredShortcuts[i];    
//     if (shortcuts[shortcut](event)) {      
//       event.preventDefault();      
//       break;    
//     }  
//   }
// };



// document.addEventListener('keydown', handleKeyDown);

//ctr key = 17


class Elsewhere extends Component {
  constructor(props){
    super(props)
    this.state={
      tool: null,
      selectedItem: null,
      selectedList: null
    }
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){

  }

  componentDidMount(){
    this.initViz()
  }

  initViz(){
    let viz 
    const vizUrl = "https://prod-useast-a.online.tableau.com/t/orbitalrxsingularity/views/Utilizationtest/Dashboard1"
    // const vizUrl = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
    const containerDiv = document.getElementById("vizContainer")
    const options = { hideTabs: false }
    viz = new window.tableau.Viz(containerDiv, vizUrl, options)
  }

  handleKeyDown = (e) => {
    console.log(e)
    if (e.keyCode === 40) {
      console.log('in first if block')
      if(this.state.selectedList === 'select'){
        console.log('in state list')
        if (this.state.selectedItem === null){
          console.log('in state num null')
          this.setState({selectedItem: 1})
        } else {
          console.log('in state +1')
          let next = this.state.selectedItem + 1
          this.setState({selectedItem: next})
        }
      }

    } else if (e.keyCode === 16 & e.which === 38) {

    } 
   }

  useTool = (tool) => {
    if (tool !== this.state.tool) {
      this.setState({ tool });
    }
  }
  

  render(){
    return(
      <div>
        <h1>Elsewhere</h1>

        <div id='vizContainer'>  </div>  
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={list.map(el => `${el} Option`)}
          renderInput={params => (
            <TextField {...params} label="autocomplete test" margin="normal" variant="outlined" fullWidth />
          )}
        />
        {list.map(el=>(
            <div
            // onClick={this.useTool(select)}
            id={`${el}-select`}
            onClick={()=>{
              this.setState({selectedItem: el, selectedList: 'select'})
              console.log(this.state.selectedItem)
            }}
            style={{backgroundColor: (this.state.selectedItem === el  && this.state.selectedList === `select`)? 'purple' : 'white'}}
            >
              {el} item{el > 1 ? 's' : ''} for display and selection.
            </div>
        ))}

        <h2>Another List</h2>
        {list.map(el=>(
            <div
            id={`${el}-no-select`}
            onClick={()=>{
              this.setState({selectedItem: el, selectedList: 'no-select'})
            }}
            style={{backgroundColor: (this.state.selectedItem === el && this.state.selectedList === `no-select`)? 'purple' : 'white'}}
            >
              {el} item{el > 1 ? 's' : ''} that better not get selected.
            </div>
        ))}

      </div>
    )
  }
}

export default withStyles()(Elsewhere)