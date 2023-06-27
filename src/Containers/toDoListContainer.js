import {useSelector} from "react-redux"
import { ToDoList } from "../Components/ToDoList";

const ToDoListContainer = () => {
    const tasks = useSelector(state => state.list.tasks)
    return <ToDoList tasks={tasks} />
}

export default ToDoListContainer;