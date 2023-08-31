import "./ListToDo.scss";
import { useState, useEffect } from "react";

const ListToDo = () => {
  const checkList = ["Eat", "Drink", "Sleep", "Read"];
  const [todoList, setInputList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedList = [...todoList];
    updatedList[index].isActive = !updatedList[index].isActive;
    setInputList(updatedList);
  };  useEffect(() => {
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
              onChange={() => handleCheckboxChange(index)}
            />
            <span className={todo.isActive?'strike-through':"right-box"}>{todo.description}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default ListToDo;
