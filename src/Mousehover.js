import { Component } from "react";

class CSEDMousehover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      buttonText: "Hover Me!",
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered: true,
      buttonText: "hello good afternoon",
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovered: false,
      buttonText: "hello iam Hovered!",
    });
  };

  render() {
    const buttonStyle = {
      padding: "10px 20px",
      fontSize: "20px",
      cursor: "pointer",
      backgroundColor: this.state.isHovered ? "blue" : "orange",
      color: "black",
      border: "1px solid black",
      borderRadius: "10px",
    };

    return (
      <button
        style={buttonStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.buttonText}
      </button>
    );
  }
}

export default CSEDMousehover;
