import InputToDo from "../../components/InputToDo/InputToDo";
import ListToDo from "../../components/ListToDo/ListToDo";
import { useState } from "react";

import "./MainContainer.scss";
const MainContainer=()=>{
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="main">
            <div className="heading">
            TO DO
            <InputToDo todoList={todoList} setTodoList={setTodoList} />
            <ListToDo todoList={todoList} setTodoList={setTodoList} />
            </div>

        </div>
    )
}
export default MainContainer;