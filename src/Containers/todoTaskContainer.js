import { useDispatch } from "react-redux";
import { ToDoTask } from "../Components/ToDoTask";
import { editTodo } from "../store/actions";
import { removeTodo } from "../store/actions";

const ToDoTaskContainer = ({element, index}) => {

    const dispatch = useDispatch();

    const editTodoHandler = (element) => {
        dispatch(editTodo(element));
    }
    const removeTodoHandler = (obj) => {
        dispatch(removeTodo(obj));
    }
    
    return <ToDoTask element={element} index={index}  editTodo={editTodoHandler} removeTodo={removeTodoHandler} />
}

export default ToDoTaskContainer;