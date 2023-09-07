
import "./Footer.scss";
const Footer=({displayActive,fetchTodos,displayCompleted,clearCompleted})=>{
    return(
        <div className="footer">
            5 items left 
            <button className="footer-buttons" onClick={fetchTodos}>All</button>
            <button className="footer-buttons" onClick={displayActive}>Active</button>
            <button className="footer-buttons" onClick={displayCompleted}>Completed</button>
            <button className="footer-buttons" onClick={clearCompleted}>Clear completed</button>
        </div>
    )
}
export default Footer;