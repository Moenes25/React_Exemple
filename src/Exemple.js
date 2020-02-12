import React from 'react';



class Exemple extends React.Component{
  constructor(){
    super()
    this.state={
      message:"hello world"
    }
  }
  OnChangeMessage() {
    this.setState({
      message:"Hello Barc"
    })
  }
  render(){
    return(
      <div>
  <h1>{this.state.message}</h1>
        <button onClick={()=>this.OnChangeMessage()}> on Click</button>
      </div>

    )
  }
}
export default Exemple;