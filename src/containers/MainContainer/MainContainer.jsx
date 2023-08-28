import InputToDo from "../../components/InputToDo/InputToDo";
import ListToDo from "../../components/ListToDo/ListToDo";
import "./MainContainer.scss";
const MainContainer=()=>{
    return (
        <div className="main">
            <div className="heading">
            TO DO
            <InputToDo />
            <ListToDo />
            </div>

        </div>
    )
}
export default MainContainer;