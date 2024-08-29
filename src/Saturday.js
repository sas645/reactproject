import { Component } from "react";

class Counter extends Component
{
    constructor()
    {
        super()
        this.state =
        {
            count : 1

        }
    }

increment =()=>
{
    this.setState(
    {
        count : this.state.count + 1
    }
)
}
decrement()
{
    this.setState(
        {
            count : this.state.count - 1
        }
    )
}
reset()
{
    this.setState(
        {
            count : 0
        }
    )
}
render()
{
  return(
    <div>
        <h1>{this.state.count}</h1>
    <button onClick={()=>this.increment()}>increment</button>
    <button onClick={()=>this.decrement()}>decrement</button>
    <button onClick={()=>this.reset()}>reset</button>
    </div>
  )
}
}
export default Counter;