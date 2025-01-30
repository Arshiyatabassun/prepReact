

import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{

    constructor(props){
        super(props)
        console.log(" parent constuctor is called")
    }
componentDidMount(){
    console.log("paarent componentDid mount")
}

    render(){
        return (
            <>
            <h1>About us page</h1>
            <UserClass name={"arshi"} />
            </>
        )
    }
}

export default About;
