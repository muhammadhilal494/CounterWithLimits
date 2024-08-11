// useState is a React Hook that lets you add a state variable to your component.
import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(5)

  //Function which increment counter value
  const AddValue = () =>{
    console.log("value added: ",Counter);
    setCounter(Counter+1)

  //Condition On counter, upper limit == 10
    if(Counter >= 10)
    {
    console.log("Counter limit end")
    setCounter(Counter=0)
    }
  }

  //Function which decrement counter value
  const removeValue = () =>{
    console.log("value removed: ",Counter);
    setCounter(Counter-1)

  //Condition on couter, lower limit == 0
    if(Counter <= 0)
    {
    console.log("Counter lower limit end")
    setCounter(Counter=0)
    }
  }
  
  return (
  <>  
    <div className=' text-center justify-item'>
      <h1
      className=" font-extrabold bg-yellow-600 rounded ml-10 px-4 text-white"
      >Counter Value: {Counter}</h1>
      <br />

      {/* Button for Add value to counter */}
      <button
       onClick={AddValue}
       className=" font-bold bg-green-400 mb-4 hover:bg-green-600 text-white"
      >
        Add value: {Counter} 
      </button>
      <br />

       {/* Button for remove value from counter  */}
      <button 
      onClick={removeValue}
      className=" font-bold bg-red-500 hover:bg-red-700 text-white"
      >
        remove value: {Counter} 
      </button>
    </div>
    <div className=" ml-5">
      <h4 className="text-red-800">Note:</h4>
        <ul>
          <li className=" text-red-800">Lower Limit: 0</li>
          <li className=" text-red-800">Upper Limit: 10</li>
        </ul>
    </div>
  </>  
  )
}

export default App
