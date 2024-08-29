import { Component } from "react";

class Abc extends Component{
    state={

        message:"Hello World!"
    }
    clickdemo()
    {
        this.setState(
            {
                message : "Good Morning...!!"
            }
        )    
    }
    render()
    {
        return(
            <div>
                <center><h1>{this.state.message}</h1>
            <button onClick ={()=>this.clickdemo()}>Welcome</button>
            </center>
            </div>
        )
    }
    
}
export default Abc;