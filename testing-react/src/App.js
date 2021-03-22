
import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button disabled={disabled} onClick={()=>setButtonColor(newButtonColor)} style={{ backgroundColor: disabled ? 'gray' : buttonColor }}>Change to {newButtonColor}</button>
      <input 
      id="disable-button-checkbox"
      onChange={(e)=>setDisabled(e.target.checked)} 
      defaultChecked={disabled}
      aria-checked={disabled}
      type="checkbox" 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
