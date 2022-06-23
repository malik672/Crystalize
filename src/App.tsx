import './App.css';
import { useState } from "react";

function App() {
  var [counter, setCounter] = useState(0);
  
    setInterval(() => {
     counter++
     setCounter(counter);
    }, 1000)



  return (
    <div className="App">
      <header className="App-header">
         <div>
           <label>counter</label>
            <h1>{counter}</h1>
         </div>
      </header>
    </div>
  );
}

export default App;
