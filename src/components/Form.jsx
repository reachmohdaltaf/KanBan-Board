/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"





const Form = ({handleSubmit}) => {
    const [input, setinput] = useState("")
    
    const onSubmit = (event)=>{
      event.preventDefault();
      if(input.trim()== "") return;
      handleSubmit(input); // yha pr hamne task ki value ko bhejdiya 
      setinput("")
    }
  return (
   <form action="" className="w-[500px] flex gap-3 "  onSubmit={onSubmit}>
    <input value={input} placeholder="Enter a new Task" type="text" onChange={(e)=> setinput(e.target.value)} className="h-full border outline-none border-gray-400 p-2 w-full" />
    <button className="border bg-[#2E76DC] text-white hover:bg-[#255496] w-52">Add Task</button>
   </form>
  )
}

export default Form