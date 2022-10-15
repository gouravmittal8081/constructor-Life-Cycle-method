import "./styles.css";
import React from "react";

export default class App extends React.Component {
  // render ke pehle construcor function call hota hai,isiliye ham State ko constructor me define krte hai
  constructor() {
    // yha super iske parent ko component ko call krne ke liye krte hai ,without super() ham parent ko call nhi kra payenge or hame error show hogi
    super();
    this.state = {
      data: "Gourav"
    };
    // console.log("constructor");
  }

  render() {
    // console.log("render"); //yha constructor function ke bad render call hoga
    return (
      <div className="App">
        <h1>Hello {this.state.data}</h1>
      </div>
    );
  }
}
