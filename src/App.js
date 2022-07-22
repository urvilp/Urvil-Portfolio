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
        <a href="#Skills">Skills</a>
        <a href="#Project">Projects</a>
      </nav>
      <section>
        <Home />
        <hr />
        <About />
        <hr />
        <Skills />
        <hr />
        <div className="banner">
          <h2>
            Programming is like any other sport. You might know the rules but
            you have to play to learn.
          </h2>
        </div>
        <hr />
        <Project />
      </section>
    </div>
  );
}

export default App;
