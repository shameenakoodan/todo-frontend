import "./ListToDo.scss";
const ListToDo = () => {
    const checkList = ["Eat", "Drink", "Sleep", "Read"];
    return (
        <>
            <div className="list-container">
                {checkList.map((item, index) => (
                    <div key={index} className="check-box">
                        <input value={item} type="checkbox" className="left-box" />
                        <span className="right-box">{item}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ListToDo;