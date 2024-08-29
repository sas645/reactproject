import { Component } from "react";

class Statement extends Component
{
    constructor()
    {
        super()
        this.state ={
            message: 'ON'
        }
    }
    toggleMessage=()=>
    {
        this.setState(prevstate=>({
            message : prevstate.message === 'ON'?'OFF':'ON'
        }))
    }
    render()
    {
        return(
            <div>
                <center>
                    <h1>{this.state.message}</h1>
                    <button onClick={this.toggleMessage}> click me</button>
                </center>
            </div>
        )
    }
}
export default Statement;