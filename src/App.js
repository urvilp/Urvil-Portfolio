import About from "./component/About";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
      </nav>
      <Home />
      <About />
      <footer>footer</footer>
    </div>
  );
}

export default App;
