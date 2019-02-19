import React, { Component } from 'react'
import Rectangle from './Rectangle'
import Remove from './Remove'
// const Rectangle = (props) => {
    
// }
// const Remove = (props) => {
//     console.log(props);
//     const {ctx,x, y, width, height,colour} = props;

//     ctx.fillStyle = `${colour}`;
//     ctx.clearRect(x, y, width, height);
// }

class New extends Component {
    constructor(props){
        super(props);
        this.deleteRectangle = this.deleteRectangle.bind(this);
        this.addRectangle = this.addRectangle.bind(this);

      }
    
    componentDidMount() {
        //this.createRectangle();
    }
    componentDidUpdate() {
       this.createRectangle();
    }
    createRectangle(props) {
        
        const ctx = this.refs.canvas.getContext('2d');
        
        Rectangle({ctx,
            x:this.props.x,
            y:this.props.y,
            width:this.props.width,
            height:this.props.height,
            colour:this.props.colour
        });    
      //  ctx.fillRect(0,0,this.props.width,this.props.height);
    }
    addRectangle(props) {
        
        const ctx = this.refs.canvas.getContext('2d');
        
        Rectangle({ctx,
            x:this.props.x,
            y:this.props.y,
            width:this.props.width,
            height:this.props.height,
            colour:this.props.colour
        });    
      //  ctx.fillRect(0,0,this.props.width,this.props.height);
    }
    deleteRectangle(props){
        console.log(this.props);
        const ctx = this.refs.canvas.getContext('2d');
        Remove({ctx,
            x:this.props.x,
            y:this.props.y,
            width:this.props.width,
            height:this.props.height,
            colour:this.props.colour
        });
    }
  render() {
    return (
        <div>

        <div>
             <button className="btn pink lighten-1 z-depth-0" onClick={this.addRectangle}>Add</button>
            <button className="btn pink lighten-1 z-depth-0" onClick={this.deleteRectangle}>Delete</button>
        </div>
        <div>   
            <canvas ref="canvas" width={600} height={600}/>
        </div>
        </div>
    )
  }
}

export default New