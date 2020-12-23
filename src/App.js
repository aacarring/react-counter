import './App.css';
import {useState} from 'react';

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment);
  }

  const clearNumber = () => {
    setCount(0);
  }

  return (
    <div className="containers">
    <div className="buttons">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={5} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
    </div>
    <div className="display">
      <p>{count}</p>
    </div>
    <div className="clear">
      <button onClick={clearNumber}>Clear</button>
    </div>
  </div>
  )
}

export default App;
