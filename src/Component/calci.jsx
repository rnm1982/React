import {useState} from 'react'

export default function calci() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
          try {
            setResult(eval(input));
          } catch (error) {
            setResult('Error');
          }
        } else if (value === 'C') {
          setResult('');
          setInput('');
        } else {
          setInput(input + value);
        }
      };

  return (
    <div>
        <input type= "text" value={input} disabled/>
        <input type= "text" value={input} disabled/>
        <div>
            <button onClick={()=> handleButtonClick('7')}>7</button>
            <button onClick={()=> handleButtonClick('6')}>6</button>
            <button onClick={()=> handleButtonClick('5')}>5</button>
            <button onClick={()=> handleButtonClick('4')}>4</button>
            <button onClick={()=> handleButtonClick('3')}>3</button>
            <button onClick={()=> handleButtonClick('2')}>2</button>
            <button onClick={()=> handleButtonClick('1')}>1</button>
            <button onClick={()=> handleButtonClick('0')}>0</button>
        </div>

    </div>
  )
}
