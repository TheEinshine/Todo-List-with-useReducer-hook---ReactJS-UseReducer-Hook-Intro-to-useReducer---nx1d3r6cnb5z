import React from 'react';
const Todo = ({state,dispatch}) => {
    
    const deleter = (e) => {
        dispatch({
            type: 'deleted',
            id: e,
          });
    }
    
    return (
        <div className='todo'>
            {state.map((e,i)=>{
                return <div id={e.id} key={i} className='todo-title'>{e.text} <br/> <button onClick={()=>{deleter(e.id)}} className='todo-delete'>Del</button></div>
            })}
            
        </div>
    )
}


export { Todo }

