import { Component } from "react";
class Welcome extends Component
{
    constructor (props)
    {
        super (props);
this.state={
    message : 'Hello World'
}
    };
    render()
    {
        return<h1>{this.state.message}</h1>
    }
}
export default Welcome;