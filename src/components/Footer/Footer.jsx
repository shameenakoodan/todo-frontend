
import "./Footer.scss";
const Footer = ({ displayActive, fetchTodos, displayCompleted, clearCompleted, sizelist }) => {
    return (
        <div className="footer">
            <div className="left-footer">
                {sizelist} items left
            </div>
            <div className="right-footer">
                <button className="footer-buttons" onClick={fetchTodos}>All</button>
                <button className="footer-buttons" onClick={displayActive}>Active</button>
                <button className="footer-buttons" onClick={displayCompleted}>Completed</button>
                <button className="footer-buttons" onClick={clearCompleted}>Clear completed</button>
            </div>

        </div>
    )
}
export default Footer;