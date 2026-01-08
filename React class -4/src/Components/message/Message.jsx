import React from 'react'
import './Message.css'
let style={
    color:"orange"
}
const Message = () => {
 return <div>
        <h3>Message Component</h3>
        <hr/>
        <h3 style={{color:"blue"}}>Good Morning - inline</h3>
        <h3 style={style}>Good Afternoon - internal</h3>
        <h3 className='box'>Good Evening - Extenal & component</h3>
        <button className='btn btn-danger'>Test</button>
        </div>
}

export default Message