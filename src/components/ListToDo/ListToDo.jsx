import "./ListToDo.scss";
import { useState, useEffect } from "react";

const ListToDo = () => {
  const checkList = ["Eat", "Drink", "Sleep", "Read"];
  const [todoList, setInputList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (index,id) => {
    const updatedList = [...todoList];
    updatedList[index].isActive = !updatedList[index].isActive;
    setInputList(updatedList);
    console.log("Wonder" + typeof updatedList[index].id);
    const num = updatedList[index].id;
    console.log("Wonder" + typeof num);

    try {
      fetch('http://localhost:8080/'+num, {
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
  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInputList(data);
        //console.log(todoList+"List");
      });
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
              onChange={() => handleCheckboxChange(index,todo.id)}
            />
            <span className={todo.isActive?'strike-through':"right-box"}>{todo.description}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default ListToDo;
