import React from 'react';
// import Counter from './components/counter';
// import './App.css';
// import Abcd from './components/useEffect';
import UserFun from './components/UserFunc';
import UserClass from './components/UserClass';
import About from './components/About'

function App() {
 
  return (
    <>
   {/* <Counter />,

     <Abcd /> */}
    <UserFun name={"arsh"}/>

    <UserClass name={"arrrr"} />
    <About />
    </>
  )
}

export default App;
