export const InputField = ({addTodo}) => {
  
  const handleKeyDown=(event)=>{
    if(event.key === 'Enter' && event.target.value !== "")
    {
      addTodo(event.target.value)
      event.target.value='';
    }
  };

  return(
    <input 
    type='text'
    className='input'
    placeholder='Input task name and then tab enter to add'
    onKeyDown={handleKeyDown}
    autoFocus
  />
  );
}