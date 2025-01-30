import React from 'react'
import { useState } from 'react'

const Counter =() =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count ,setCount]= useState(0);
    const increament = ()=> setCount(count+1);
    const decreament = () =>setCount(count-1);
  
 
return (
<>
<p>current count :{count}</p>
<button onClick={increament}>increament</button>
<button onClick={decreament}>decreament</button>
</>
  )
}
  export default Counter;