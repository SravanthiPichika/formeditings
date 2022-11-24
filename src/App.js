import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform"
import About from "./About";

function App() {
  return (
    <>
      <Navbar title="SRAVANTHI" about="ABOUT US" />
      <div className="container my-3">
        <Textform heading="Enter your text"/>
        <About />
      </div>
    </>
  );
}

export default App;
