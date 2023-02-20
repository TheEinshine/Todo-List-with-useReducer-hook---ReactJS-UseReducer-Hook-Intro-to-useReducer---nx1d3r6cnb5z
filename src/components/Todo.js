import React from 'react';
const Todo = ({ state, dispatch }) => {

    const remover = (e) => {
        dispatch({
            type: 'deleted',
            id: e,
        });
    }

    return (
        <div className='todo'>
            {state.map((e, i) => {
                return <div id={e.id} key={i} className='todo-title'>{e.text} <br /> 
                <button onClick={() => { remover(e.id) }} className='todo-delete'>delete</button></div>
            })}

        </div>
    )
}


export { Todo }

