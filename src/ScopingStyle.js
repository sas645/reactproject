import React, { Component } from "react";

class ScopedStyleExample extends Component {
  render() {
    // Scoped styles defined inside the render method
    const buttonStyle = 
    {
      backgroundColor: "blue",
    //   color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    };

    const textStyle = 
    {
      fontSize: "18px",
      color: "black",
      marginBottom: "10px",
    };

    return (
      <div>
        <p style={textStyle}>This is a scoped style example.</p>
        <button style={buttonStyle}>Click Me</button>
      </div>
    );
  }
}

export default ScopedStyleExample;
