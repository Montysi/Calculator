import { useState } from 'react'

import './App.css'

const App =() => {

  const [sum, setSum] = useState("")
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "*", "/"];

  const handleClick = (btn) => {
    // If user enters = 
    // Pass the sum into the evaluate function
    // The evaluate answer becomes sum after setSum is given the above
  }
  
  return (
    <div className="centre">
      <h2>Sam's awesome Calculator</h2>
      <h4 className="inputBox"></h4>
      <div className="buttonWrap"></div>
      {
        buttons.map((button, index) => {
          return (
            <button key={index} onClick={() => handleClick(button)} className="btn"></button>
          )
        })
      }
    </div>
  )
}

export default App
