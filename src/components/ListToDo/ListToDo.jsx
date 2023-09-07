import Footer from "../Footer/Footer";
import "./ListToDo.scss";
/*
<input
              value={todo.description}
              type="checkbox"
              className="left-box"
              checked={todo.isActive}
              onChange={() => handleCheckboxChange(index, todo.id)}
            />
*/
const ListToDo = ({ todoList, handleCheckboxChange, handleDelete }) => {
  return (
    <>
      <div className="list-container">
        {todoList.map((todo, index) => (
          <div key={todo.id} className="check-box">
            <button className={`custom-button ${todo.isActive ? 'active' : 'inactive'}`} onClick={() => handleCheckboxChange(index, todo.id)}>
              {todo.isActive ? (
                <img src={process.env.PUBLIC_URL + "/icons/icon-check.svg"} alt="Check" />
              ) : null}
            </button>
            <span className={todo.isActive ? "strike-through" : "right-box"}>
              {todo.description}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        ))}
        <Footer className="check-box" />
      </div>

    </>
  );
};
export default ListToDo;
