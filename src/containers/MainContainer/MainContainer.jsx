import InputToDo from "../../components/InputToDo/InputToDo";
import "./MainContainer.scss";
const MainContainer=()=>{
    return (
        <div className="main">
            <div className="heading">
            TO DO
            <InputToDo />
            </div>

        </div>
    )
}
export default MainContainer;