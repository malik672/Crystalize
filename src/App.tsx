import './App.css';
import { useEffect, useState } from "react";

function App() {
  const[state, setState] = useState("");
  useEffect(() => {
    const home = (async() => {
      const data =  await fetch("https://api.nasa.gov/planetary/apod?api_key=P7uoXt969xdSvSsNXAVvuVSZ5lWiU6UiMUWTWuSL&date=2014-10-01&concept_tags=True");
      const url = data.json();
      const imgs = await url;
      console.log(imgs.url);
      setState(imgs.url);
    })
    home();
  })
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch nasa image of the day using nasa api</h1>
        <img src={state}></img>
      </header>
    </div>
  );
}

export default App;
