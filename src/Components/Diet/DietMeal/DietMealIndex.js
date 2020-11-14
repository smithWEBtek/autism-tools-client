import React from "react";
import "./DietMealIndex.scss";
import DietMealRow from "./DietMealRow";


const DietMealIndex = (props) => {
  const renderedDietMeals = props.dietMeals.map((dietMeal, index) => {
    return (
      <tr key={index}>
        <DietMealRow
          index={index}
          dietMeal={dietMeal}
        />
      </tr>)
  })

  return (
    <table className="diet-meal-index">
      <thead>
        <tr>
          <td>diet</td>
          <td>meal</td>
        </tr>
      </thead>
      <tbody>
        {renderedDietMeals}
      </tbody>
    </table>
  );
};

export default DietMealIndex;
