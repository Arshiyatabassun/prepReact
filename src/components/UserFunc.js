
import {useState} from 'react'
const UserFun = ({name})=>{
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(1)
    return(
        <>
        <h4>count:{count}</h4>
        <h4>count2:{count2}</h4>
        <h2>Name:{name}</h2>
        <h3>Address:abcsdddd</h3>
        <h3>Contact:987653210</h3>
        </>
    )
}

export default UserFun;