const todoReducer = (state, action) => {
    switch (action.type) {
       case 'added' : {
        return [...state, {
            text: action.text,
            id: action.id,
        }];
       }
       case 'deleted' : {
        return state.filter(t => t.id !== action.id);
       }
       default: {
        throw Error('Unknown action: ' + action.type);
      }

    }
}

export { todoReducer }