import { useEffect, useState } from "react";
import ApiContext from "./components/Context/Api";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  const [api, setApi] = useState({});

  useEffect(() => {
    function setAnnonces(data: unknown) {
      if (Array.isArray(data)) {
        setApi(data);
      } else {
        console.error("Les données ne sont pas un tableau");
      }
    }

    fetch("https://api-strasgite.vercel.app/items", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAnnonces(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ApiContext.Provider value={{ api }}>
        <Header />
        <Hero />
        <Footer />
      </ApiContext.Provider>
    </>
  );
}

export default App;
