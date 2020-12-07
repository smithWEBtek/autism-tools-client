import React from "react";
import Diet from "./Diet/Diet";
import DietMealsIndex from "./DietMeal/DietMealIndex";

const API_URL = process.env.REACT_APP_API_URL

class Diets extends React.Component {
  state = {
    visible: false,
    diets: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/diets`)
      .then((response) => response.json())
      .then((diets) => this.setState({ diets: diets }));
  }

  showDiets = (event) => {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
  };

  render() {
    const dietMeals = [
      { diet: 'Veggie', meal: 'Soup & Sandwich' },
      { diet: 'Veggie', meal: 'Fish  casserole' },
      { diet: 'Veggie', meal: 'Burrito plate' }
    ]

    let renderedDiets;
    if (this.state.visible) {
      renderedDiets = this.state.diets.map((diet, index) => {
        return <Diet diet={diet} key={index} />;
      });
    }

    return (
      <div>
        <h2>
          <button onClick={this.showDiets}>Diets</button>
        </h2>
        <p>Diets | Meals | Recipes | Rules</p>
        {renderedDiets}
        <DietMealsIndex dietMeals={dietMeals} />
      </div>
    );
  }
}

export default Diets;
