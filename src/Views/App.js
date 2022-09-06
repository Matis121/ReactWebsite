import "./App.css";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import NavList from "../Components/NavList";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div class="margin">
        <NavList></NavList>
        <Intro />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
