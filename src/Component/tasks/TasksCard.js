import React from "react";

const TaskCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>Describtion: {props.describtion}</h4>
      <p>Assign : {props.assign}</p>
      <p>Started:{props.start}</p>
    </div>
  );
};

export default TaskCard;