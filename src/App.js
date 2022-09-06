import "./App.scss";
import Banner from "./components/banner/Banner";
import Article from "./components/article/Article";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="justify-content-md-center">
        <Banner />
        <Article />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
