import './meal-item.js';

class MealList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

  }

  set mealss(meals) {
    this._meals = meals;
    this.render();
  }

  renderError(messages) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
    </style>`;
    this.shadowDOM.innerHTML += `
    
    <h2 class="placeholder">${messages}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this._meals.forEach(meal => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.shadowDOM.appendChild(mealItemElement);
    })
  }
}

customElements.define("meal-list", MealList);