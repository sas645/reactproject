import { Component } from "react";
class UserInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            inputText : ""
        };
    }
    handleInputChange = (event) =>
    {
        this.setState({inputText : event.target.value});
    };
    handleSubmit= (event) =>
    {
        event.preventDefault();
        alert("You entered : ${this.state.inputText}");
    };
    render ()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter the Email :
                        <input type = "text" value = {this.state.inputText}onChange={this.handleInputChange}>
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter password :
                        <input type = "text" value = {this.state.inputText}onChange={this.handleInputChange}>
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>You entered : {this.state.inputText}</p>
            </div>
        );
    }
}
export default UserInput;