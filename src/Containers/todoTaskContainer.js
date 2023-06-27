import { useDispatch } from "react-redux";
import { ToDoTask } from "../Components/ToDoTask";
import { editTodo } from "../store/actions";
import { removeTodo } from "../store/actions";

const ToDoTaskContainer = ({element, index}) => {

    const dispatch = useDispatch();

    const editTodoHandler = (index, value) => {
        dispatch(editTodo(index, value));
    }
    const removeTodoHandler = (index) => {
        dispatch(removeTodo(index));
    }
    
    return <ToDoTask element={element} index={index}  editTodo={editTodoHandler} removeTodo={removeTodoHandler} />
}

export default ToDoTaskContainer;