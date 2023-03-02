import { Component } from "react";
import { nanoid } from "nanoid";

import SusiBase from "./dataBase/Susi";
import "./App.css";
import { LeftSideMenu } from "./components/Menu";
import { SusiList } from "./components/SusiList";
import RightSide from "./components/RightSide";

// console.log(JSON.parse(localStorage.getItem("orderList")));
const initialvalue = [
  ...(JSON.parse(localStorage.getItem("orderList"))
    ? JSON.parse(localStorage.getItem("orderList"))
    : []),
];
class App extends Component {
  state = {
    orderList: [...initialvalue],
    historiOrders: [
      {
        date: new Date().toLocaleDateString(),
        summ: 1500,
        orderListInHistoty: [
          { id: "K00M58ORuMjhFuHcYnIz3", name: "4 сири", price: 130 },
        ],
      },
    ],
  };

  toLocalStorageAdder = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  addOrderHendler = (id) => {
    this.setState((prewState) => ({
      orderList: [
        { ...SusiBase.find((susha) => susha.id === id), id: nanoid() },
        ...prewState.orderList,
      ],
    }));
  };

  delOfOrderList = (identyficator) => {
    console.log(identyficator);
    this.setState((prevState) => ({
      orderList: [
        ...prevState.orderList.filter(({ id }) => id !== identyficator),
      ],
    }));
  };
  clearOrderList = () => {
    this.setState({ orderList: [] });
  };

  countTotalPrice = () =>
    this.state.orderList.reduce((acc, { price }) => (acc += price), 0);

  render() {
    const totalSumm = this.countTotalPrice();
    this.toLocalStorageAdder("orderList", this.state.orderList);

    return (
      <div className="App">
        <LeftSideMenu>
          <SusiList
            susiArr={SusiBase}
            onButtonHendler={this.addOrderHendler}
          ></SusiList>
        </LeftSideMenu>
        <RightSide
          clear={this.clearOrderList}
          onButtonHendler={this.delOfOrderList}
          totalSumm={totalSumm}
          susiArr={this.state.orderList}
        />
      </div>
    );
  }
}

export default App;
