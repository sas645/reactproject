import { Component } from "react";
class ABC extends Component{
    state = {
        message : "Hello World"
    }
    clickdemo()
    {
        this.setState(
            {
            message : 'Good morning makkale'
            }
        )
    }
render()
{
    return(
       <div>
        <center><h1>{this.state.message}</h1>
        <button onClick={()=>this.clickdemo()}>hii</button>
        </center>
       </div> 
    )
}
}
export default ABC;