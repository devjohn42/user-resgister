import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import AppRouter from "./AppRouter";

function App() {
  return (
    <HashRouter>
      <div className="h-[100vh] bg-main">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
