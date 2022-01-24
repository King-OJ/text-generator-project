import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const [error, setError] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    let amount = parseInt(count)

    if(count === 0){ 
      amount = 0
      setText(data.slice(0, amount))
    }
    
    for(let i = 0; i < 10; i++){ 
      setError(false)
      setText(data.slice(0, amount))  }

    if(count < 0){ 
      setError(!error) 
      setText([])
      }

      // if (count <= 0) {
      //   amount = 1;
      // }
      // if (count > 8) {
      //   amount = 8;
      // }
      // setText(data.slice(0, amount));
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring Lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" id="amount" name="amount" onChange={(e)=>setCount(e.target.value)} value = {count}/>
      <button className="btn">generate</button>
    </form>
    <article className="lorem-text">
    {error && <p>You entered an invalid input. Refresh and start over</p>}
      {text.map((item, index)=>{ 
        return (
          <p key={index}>{item}</p>
        )
      })}
    </article>
  </section>
    )
}

export default App;
