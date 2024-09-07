// import React from 'react'
// import Canves from "./canvas/Index";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      {/* <Canves/> */}
      <Customizer/>

    </main>
  )
}

export default App