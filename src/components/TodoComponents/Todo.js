import React from "react";
import Item from "./TodoForm";

const Todo = props => {
    return(
        <div className="Todo-list">
            {props.groceries.map(item =>(
                <Item
                key={item.id}
                item={item}
                toggleList={props.toggleList}
                />
            ))}
            <button className="clear-btn" onClick=
            {props.clearList}>
                Clear List
            </button>
        </div>
    );
};
export default Todo;