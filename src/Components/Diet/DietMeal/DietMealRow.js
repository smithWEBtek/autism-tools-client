import React from "react";
import "./DietMealRow.scss";
const DietMealRow = (props) => {
  return (
    <td key={props.dietMeal.index} className="diet-meal-row">
      {props.dietMeal.diet}: {props.dietMeal.meal}
    </td>
  );
};

export default DietMealRow;
