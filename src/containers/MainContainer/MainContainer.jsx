import InputToDo from "../../components/InputToDo/InputToDo";
import ListToDo from "../../components/ListToDo/ListToDo";
import { useState, useEffect } from "react";

import "./MainContainer.scss";
const MainContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setInputList] = useState([]);

  const handleChange = async (event) => {
    if (event.key === "Enter") {
      setInputValue(event.target.value);
      const newdata = {
        "description": inputValue,
        "isActive": false
      }
      console.log(JSON.stringify(newdata) + "  Stringiffy");
      fetch("http://localhost:8080/addtodo", {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newdata)
      }).then(() => {
        fetchTodos();
      });

    }
  };
  const handleDelete = (id) => {
    try {
      const response = fetch("http://localhost:8080/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setInputList(todoList.filter((todo) => todo.id !== id));
      if (response.ok) {
        // If the response indicates success, update your UI (remove the deleted item)
        setInputList(todoList.filter((todo) => todo.id !== id));
      } else {
        console.error("Error deleting todo:", response.status);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  const handleCheckboxChange = (index, id) => {
    const updatedList = [...todoList];
    updatedList[index].isActive = !updatedList[index].isActive;
    setInputList(updatedList);
    const num = updatedList[index].id;

    try {
      fetch("http://localhost:8080/" + num, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: updatedList[index].isActive }),
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const fetchTodos =()=>{
    fetch("http://localhost:8080/todos")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setInputList(data);
    });
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="main">
      <div className="heading">
        TO DO
        <InputToDo setInputValue={setInputValue} inputValue={inputValue} handleChange={handleChange}/>
        <ListToDo todoList={todoList} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete}/>
      </div>

    </div>
  )
}
export default MainContainer;