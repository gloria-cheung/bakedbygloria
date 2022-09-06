import "./App.scss";
import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import Article from "./components/article/Article";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <div className="justify-content-md-center">
        <Nav />
        <Banner />
        <Article />
        <About />
        <Contact />
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default App;
