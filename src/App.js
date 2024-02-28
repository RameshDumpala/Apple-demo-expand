import Iphone_pro_max from "./Iphone_pro_max/Iphone_pro_max"
import Iphone_pro from "./Iphone_pro/Iphone_pro"
import './App.css';
import { useState } from "react";

function App() {

const [expandall,setExpandall]=useState(false)

const handleexpand=()=>{
  setExpandall(!expandall)
}

  return (
    <div className="mainapp_div">
    <div className="App">
  <p onClick={handleexpand}>Expand all</p>
 <Iphone_pro_max expandall={expandall} setExpandall={setExpandall} />
 <Iphone_pro expandall={expandall} />
    </div>
    </div>
  );
}

export default App;
