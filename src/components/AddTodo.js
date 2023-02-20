import React, { useState } from "react"

const AddTodo = ({ dispatch }) => {
    const [data,setData] = useState('');

    function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: Date.now(),
      text: text,
    });
    setData('');
  }
//   console.log(data);

    
   return (
        <>
            <form onSubmit={(e)=>e.preventDefault()} id="todo-form" >
                <input value={data} onChange={(e)=>{setData(e.target.value)}} type="text" id="todo-input"/>
                <button onClick={()=>{handleAddTask(data)}} type="submit">Submit</button>
            </form>
        </>
    )
}

export { AddTodo }