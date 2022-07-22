import About from "./component/About";
import Home from "./component/Home";
import Project from "./component/Project";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Project">Projects</a>
        <a href="#Skills">Skills</a>
      </nav>
      <Home />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Project />
      <hr />
      <footer>footer</footer>
    </div>
  );
}

export default App;
