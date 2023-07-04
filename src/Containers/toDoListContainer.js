import {useSelector, useDispatch} from "react-redux"
import { ToDoList } from "../Components/ToDoList";
import { useEffect } from "react";

const ToDoListContainer = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch({ type: 'START_APP' });
      }, []);
      const tasks = useSelector(state => state.list.tasks);
    return <ToDoList tasks={tasks} />
}

export default ToDoListContainer;