import React from "react";
import "./Recipe.scss";
const Recipe = (props) => {
  return (
    <div key={props.index} className="recipe-card">
      <h4>
        {props.recipe.name}: {props.recipe.description}
      </h4>
    </div>
  );
};

export default Recipe;
