import React from "react";
import Header from "./components/global/Header";
import Main from "./components/Main";
import Footer from "./components/global/Footer";

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-principal text-9xl text-center font-bold">
        DS Levelup!!
      </h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
