import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyle from "./globalStyle";
import InitialPage from "./components/InitialPage/InitialPage";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <InitialPage />
      <About />
      <Services />
    </div>
  );
}

export default App;
