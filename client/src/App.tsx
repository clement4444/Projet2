import { useEffect, useState } from "react";
import ApiContext from "./components/Context/Api";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  //state de api
  const [api, setApi] = useState({});

  useEffect(() => {
    //function pour mettre api une foie le fetche fait
    function setAnnonces(data: unknown) {
      //verifi que c'est un objet
      if (Array.isArray(data)) {
        //met api
        setApi(data);
      } else {
        //message eurreur dans le cas ou c'est pas un objet
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
