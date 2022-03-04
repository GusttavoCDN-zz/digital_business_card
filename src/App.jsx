import React from "react";
import "./App.css";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div id="card">
        <Info />
      </div>
    );
  }
}
export default App;
