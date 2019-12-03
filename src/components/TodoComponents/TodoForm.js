import React from "react";

const TodoForm = props => {
  let verboseClassName = "item";
  if (props.item.list) {
    verboseClassName = verboseClassName + " list";
  }

  const handleClick = () => {
    props.toggleList(props.item.id);
  };

  return (
    <div onClick={handleClick} className={verboseClassName}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default TodoForm;