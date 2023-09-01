import "./ListToDo.scss";
import { useState, useEffect } from "react";
const handleDelete = (id) => {
  alert("delte");
};
const ListToDo = () => {
  const [todoList, setInputList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
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
    <>
      <div className="list-container">
        {todoList.map((todo, index) => (
          <div key={todo.id} className="check-box">
            <input
              value={todo.description}
              type="checkbox"
              className="left-box"
              checked={todo.isActive}
              onChange={() => handleCheckboxChange(index, todo.id)}
            />
            <span className={todo.isActive ? "strike-through" : "right-box"}>
              {todo.description}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default ListToDo;
