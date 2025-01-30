import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Abcd = ()=>{

const [posts ,setPosts]=useState([])
  
useEffect(()=>{
       console.log('useseffct called')
       dataFecth()
   })



//    const dataFecth =()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>{
//         console.log(res)
//     }).catch(err=>{
//         console.log(err)
//     })
//    }
const dataFecth =async()=>{
    const data =  await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await data.json();
    console.log(json)



return(
    <>
   <ul>
    {posts.map(post=>
        <li key={post.id}>{post.title}</li>)
    }
   </ul>
    </>
)
}
} 

export default Abcd;