
import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button disabled={disabled} onClick={()=>setButtonColor(newButtonColor)} style={{ backgroundColor: buttonColor }}>Change to {newButtonColor}</button>
      <input 
      onChange={(e)=>setDisabled(e.target.checked)} 
      defaultChecked={disabled}
      aria-checked={disabled}
      type="checkbox" 
      name="" id=""
      />
    </div>
  );
}

export default App;
