import { useState } from "react";
import "./InputToDo.scss";

const InputToDo=()=>{
    const [inputValue,setInputValue] = useState('');
    const [isActive, setIsChecked] = useState(false);

    const handleChange = async (event)=>{
        if(event.key === "Enter")
        {    
            setInputValue(event.target.value);
            console.log(isActive)
            const newdata = {
                "description":inputValue,
                "isActive":false
            }
            console.log(JSON.stringify(newdata)+ "  Stringiffy");
           fetch("http://localhost:8080/addtodo", {
                        method: 'POST',
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(newdata)
                    }).then(() => {
                        console.log("New toDo added");
                    });
                 //   await axios.post('http://localhost:8080/addtodo', newdata);

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