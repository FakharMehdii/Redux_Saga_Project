import {useSelector, useDispatch} from "react-redux"
import { ToDoList } from "../Components/ToDoList";
import { useEffect } from "react";

const ToDoListContainer = () => {
    const tasks = useSelector(state => state.list.tasks);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch({ type: 'START_APP' });
      }, []);
    return <ToDoList tasks={tasks} />
}

export default ToDoListContainer;