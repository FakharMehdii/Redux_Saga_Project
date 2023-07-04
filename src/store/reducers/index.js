import { combineReducers } from "redux"
import {ADD_TODO} from '../actions/index'
import { EDIT_TODO } from "../actions/index";
import { REMOVE_TODO } from "../actions/index";

const initialState = {
    tasks: [],
}

const list = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_TODO_STORE':
        {
            return {
                ...state,
                tasks: action.payload,
            };
        }
        case REMOVE_TODO:
        {
            // const updatedTasks = state.tasks.filter((task, index) =>  task.id !==action.payload.id);

            // return {
            //     ...state,
            //     tasks: updatedTasks,
            // };
        }
        case EDIT_TODO:
        {
            // const updatedTasks= [...state.tasks];
            // updatedTasks.forEach(task => {
            //     if(task.id === action.payload.id) task.name=action.payload.name
            // })            
            // return {
            //     ...state,
            //     tasks: updatedTasks,
            // };

        }
        default:
            return state;
    }    
}

const rootReducer = combineReducers({
    list,
});

export default rootReducer;