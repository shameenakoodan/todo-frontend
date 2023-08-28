import { useState } from "react";
import "./InputToDo.scss";
const InputToDo=()=>{
    const [inputValue,setInputValue] = useState('');
    const handleChange = (event)=>{
        if(event.key === "Enter")
        {    
            setInputValue(event.target.value);
            const newdata = {
                "description":inputValue,
                "isDone":"false"
            }
            fetch("http://localhost:8080/addtodo", {
                        method: 'POST',
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(newdata)
                    }).then(() => {
                        console.log("New toDo added");
                    });
            console.log(inputValue);
        }
    };
    
    return (
        <div>
        <input type="text" placeholder="Create a new todo..." name="todolist" id="todolist"  value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleChange}/>
        </div>
    )
}
export default InputToDo;