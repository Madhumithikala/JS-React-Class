import { useState } from "react";

let Message =()=>{
    // let msg="Hello";
    let[msg,setMsg]=useState("Hello...")
    // let gmHandler=()=>{
    //     setMsg("Good Morning")
    // }
    // let gnHandler=()=>{
    //     setMsg("Good Night")
    // }
    // let gfHandler=()=>{
    //     setMsg("Good Afternoon")
    // }

    return <div>
            <h3>Message Component</h3>
            <hr/>
            <h4>Message Value:{msg}</h4>
            <button onClick={()=>{setMsg("GoodMorning")}}>GM</button>

            <button onClick={()=>{setMsg("GoodNight")}}>GN</button>

            <button onClick={()=>{setMsg("GoodAfternoon")}}>GA</button>
            </div>
}
export default Message;