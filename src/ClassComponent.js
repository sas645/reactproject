/*const { Component } = require("react");
class Sasmita extends Component
{
    
    render()
    {
        return(
            <div >
                <h1>Hii guys</h1>
                <CSED name="SASMITA"/>
            </div>
        )
    }
}
export default Sasmita;
class CSED extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
                <h1>This is {this.props.name}</h1>
            </div>
        )
    }
}*/
const { Component } = require("react");
class Sasmita extends Component
{
    
    render()
    {
        return(
            <div >
                <h1>Hii guys</h1>
                <CSED name="SASMITA"/>
            </div>
        )
    }
}
export default Sasmita;
class CSED extends Component{
    render()
    {
        return(
            <div>
                <h1>This is {this.props.name}</h1>
            </div>
        )
    }
}