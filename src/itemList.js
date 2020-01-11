import React, { Component } from "react";
import dummyData from "./data.json";
import "./style.scss";
class ItemList extends Component {
  constructor(props) {
    super(props);

    this.itemUi = this.itemUi.bind(this);
  }

  itemUi(item) {
    return (
      <li>
        <div key={item._id} className="item">
          <h2>{item._name}</h2>
          <p>{item._id}</p>
          <div key={item._id + 1} className="product">
            <img />
          </div>
        </div>
      </li>
    );
  }

  render() {
    const Breakfast = dummyData.Breakfast;
    const Lunch = dummyData.Lunch;
    const Dinner = dummyData.Dinner;
    const Snack = dummyData.Snack;
    const Drink = dummyData.Drink;
    const Sweet = dummyData.Sweet;
    console.log(Breakfast);
    return (
      <div>
        <div className="container">
          <div className="title">
            <div className="heading">Breakfast</div>
          </div>
          <ul>
            {Breakfast.map(this.itemUi)}
            <li >
              <div key="11" className="item">
                <h2>Show More</h2>
                <p>Inf</p>
                <div key="12" className="product">
                  <img />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="title">
            <div className="heading">Lunch</div>
          </div>
          <ul>{Lunch.map(this.itemUi)}</ul>
        </div>
        <div className="container">
          <div className="title">
            <div className="heading">Dinner</div>
          </div>
          <ul>{Dinner.map(this.itemUi)}</ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
