import React from "react";
import "./Meal.scss";
const Meal = (props) => {
  return (
    <div key={props.index} className="meal-card">
      <h4>
        {props.meal.name}: {props.meal.description}
      </h4>
    </div>
  );
};

export default Meal;
