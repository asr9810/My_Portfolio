import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header, { PhoneMenu } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import { useState } from "react";


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <>
    <PhoneMenu menuOpen={menuOpen} setmenuopen={setMenuOpen}/>
    <Header setmenuopen={setMenuOpen} menuopen={menuOpen}/>
    <Home/>
    <Work/>
    <Timeline/>
    <Skill/>
    <Contact/>
    <Toaster/>
    <Footer/>

  </>
  );
}

export default App;
