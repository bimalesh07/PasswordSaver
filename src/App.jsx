import { useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";


function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      document.documentElement.className = theme;
    }, [theme]);

  return (
    <>
       <Navbar theme={theme} setTheme={setTheme} />
      <div className="[minHeight:88vh]">
        <Manager />
      </div>
      <Footer/>
    </>
  );
}

export default App;
