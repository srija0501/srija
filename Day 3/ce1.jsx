import React, {Component } from 'react';
class Togglemessage extends Component{
    constructor()
    {
        super();
        this.state={
            isvisible: false
        }
    }
   togglemsg=()=>
   {
    this.setState(prevState=>(
        {
            isvisible : !prevState.isvisible
        }
    ))
   }
   render()
   {
    return (
        <div>
        <button onClick={this.togglemsg}>{this.state.isvisible ?'Hide Component': 'Show component'}</button>
       {this.state.isvisible &&<p> Hi! How are u?</p>} 
        </div>
    )
   }
}
export default Togglemessage;