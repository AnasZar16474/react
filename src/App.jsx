import { useState } from "react";


function App() {
  let[count,setCount]=useState(0)
  console.log(useState(0))
  function anas(){
  setCount(count+1)
    console.log(count);

  }

return(
  <button className="type" onClick={anas}> AnasZarzour {count}</button>





)
   
  


}

export default App
