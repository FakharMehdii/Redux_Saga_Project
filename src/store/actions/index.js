export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO_STORE = 'ADD_TODO_STORE';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo 
    };
}

export const addTodoInStore = (todo) => {
    return {
        type: ADD_TODO_STORE,
        payload: todo,
    };
}


export const removeTodo = (obj) => {
    return {
        type: REMOVE_TODO,
        payload: obj,        
    };
}

export const editTodo = (task) => {
    return {
        type: EDIT_TODO,
        payload: task,   
    };
}
