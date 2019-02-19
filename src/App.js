import React, { Component } from 'react'
import New from './components/New';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          width:200,
          height:100,
          colour:'red'
        };
        this.changeColour = this.changeColour.bind(this);
        this.increaseWidth = this.increaseWidth.bind(this);
        this.increaseHeight = this.increaseHeight.bind(this);
  }
  increaseWidth(){
    this.setState(prevState => {
      return {
        width: this.state.width + 1
      }
    });
  }
   
   increaseHeight(){
    this.setState(prevState => {
      return {
        height: this.state.height+1
      }
    });
   }
   changeColour(e){
        console.log(e.target.value)
        console.log(e.target.name)
    this.setState({ 
           [e.target.name]:e.target.value
    });
   }
  render() {
   // console.log(this.state.colour);
    //const {Colour1} = this.state.colour
    //console.log(Colour1);
    return (
      <div>
    
          <h2>{this.state.colour}</h2>
          <label class="active" for="colour">Enter the colour(By default: Red)</label>
         <input type='text' name='colour' onChange={this.changeColour} />
        <button className="btn pink lighten-1 z-depth-0" onClick={this.increaseWidth}>Width</button>
        <button className="btn pink lighten-1 z-depth-0" onClick={this.increaseHeight}>Height</button>
      <div>
      <New x={200} y={200} height={this.state.height} width={this.state.width} colour={this.state.colour}/>
      </div> 
      </div>
       
    )
  }
}

export default App;