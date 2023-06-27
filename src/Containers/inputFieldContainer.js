import { useDispatch } from "react-redux";
import { InputField } from "../Components/InputField";
import { addTodo } from "../store/actions";

const InputFieldContainer = () => {
    const dispatch=useDispatch();
    const addTodoHandler = (value) => {
        dispatch(addTodo(value));
    }   
    return <InputField addTodo={addTodoHandler}/>
}

export default InputFieldContainer;