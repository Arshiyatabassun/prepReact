

import React from 'react'


class UserClass extends React.Component{
constructor(props){
    super(props)
//use of state variable
    // this.state={
    //     count:0,
    //     count2:2
    // }

    // console.log("child constuctor called")
}

componentDidMount(){
    console.log("child componentdidmount called")
}
    
render(){
        const {name}=this.props;
        const {count,count2}=this.state
        return (
            <div className='userCard'>
                <h2>count:{count}</h2>
                <button onClick ={()=>{
                    this.setState({
                        count:this.state.count+1})
                }}>Increament</button>
                <h2>count:{count2}</h2>
            <h2>Name:{name}</h2>
            <h2>Contact:987631010</h2>
            </div>
        )
    }
}

export default UserClass;