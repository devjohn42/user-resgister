import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/global/Header";
import Main from "./components/Main";
import Footer from "./components/global/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100vh] bg-main">
        {/* <h1 className="text-principal text-9xl text-center font-bold red">
          DS Levelup!!
        </h1> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
