// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from "./components/Header";
import "./App.css";
import ObjectExample from './components/ObjectExample'
import Login from "./components/Login";
import ControllComp from "./components/ControllComp";
import AddRemove from "./components/AddRemove";
// import Greeting from "./components/Greeting";

function App() {
  // const data = [
  //   { img: "/vite.svg", title: "title 1", description: "Lorem1" },
  //   { img: "/vite.svg", title: "title 2", description: "Lorem3" },
  //   { img: "/vite.svg", title: "title 3", description: "Lorem2" },
  // ];

  return (
    <>
      <Header />
      <ObjectExample/>

      <ControllComp />

      {/* <Header
     img={data[0].img}
     title={data[0].title}
     description={data[0].description}
     />
      <Header
     img={data[1].img}
     title={data[1].title}
     description={data[1].description}
     />
       <Header
     img={data[2].img}
     title={data[2].title}
     description={data[2].description}
     /> */}
      <AddRemove />
      {/* <Basic_2/> */}

      {/* <div>{jsx} <Example/> : <p>prasome prisijungti</p></div> */}

      {/* <div>{jsx}</div> */}

      {/* {jsx}; */}
      <Login />
      {/* <Greeting/> */}
    </>
  );
}

export default App;
