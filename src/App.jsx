import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project"
import Contact from "./components/Contact"
import ScrollDownArrow from "./components/ScrollDownArrow";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <ScrollDownArrow />
      <About />
      <ScrollDownArrow />
      <Experience />
      <ScrollDownArrow />
      <Project />
      <ScrollDownArrow />
      <Contact />
      <ScrollToTop />
    </>
  );
}
