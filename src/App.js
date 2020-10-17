import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <>
      <div className="title">UPCoders</div>
      <Test
        title={"Sobre nosotros"}
        body={
          "Somos una sociacion de programadores y nos gusta mucho hacer hackatons"
        }
      />
      <Test title={"Hola"} body={"Hasta luego"} />
    </>
  );
}

export default App;
