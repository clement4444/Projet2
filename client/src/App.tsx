import { ApiProvider } from "./Context/Api";
import { CopieApiProvider } from "./Context/CopieApi";
import { IndexRoomProvider } from "./Context/IndexRoom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <>
      <IndexRoomProvider>
        <CopieApiProvider>
          <ApiProvider>
            <Header />
            <Hero />
            <Footer />
          </ApiProvider>
        </CopieApiProvider>
      </IndexRoomProvider>
    </>
  );
}

export default App;
