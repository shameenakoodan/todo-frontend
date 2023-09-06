import "./InputToDo.scss";

const InputToDo=({setInputValue,inputValue,handleChange})=>{
    return (
        <div>
        <input type="text" placeholder="Create a new todo..." name="todolist" id="todolist"  value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleChange}/>
        </div>
    )
}
export default InputToDo;