import InputFieldContainer from "../../Containers/inputFieldContainer"
import ToDoTaskContainer from "../../Containers/todoTaskContainer"

export const ToDoList = ({tasks}) => {
    return(
      <div className='toDoList'>
          <h2 className='heading'>My Todo</h2>
          <InputFieldContainer />
          <hr></hr>
          {tasks.length && tasks.map((element, index,) => <ToDoTaskContainer element={element} index={index} /> )  }                  
      </div>
    );
}
