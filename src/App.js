import { Component } from "react";
import { nanoid } from "nanoid";

import SusiBase from "./dataBase/Susi";
import "./App.css";
import { LeftSideMenu } from "./components/Menu";
import { SusiList } from "./components/SusiList";
import RightSide from "./components/RightSide";

class App extends Component {
  state = {
    orderList: [],
  };

  addOrderHendler = (id) => {
    this.setState((prewState) => ({
      orderList: [
        ...prewState.orderList,
        { ...SusiBase.find((susha) => susha.id === id), id: nanoid() },
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

  countTotalPrice = () =>
    this.state.orderList.reduce((acc, { price }) => (acc += price), 0);

  render() {
    const totalSumm = this.countTotalPrice();

    return (
      <div className="App">
        <LeftSideMenu>
          <SusiList
            susiArr={SusiBase}
            onButtonHendler={this.addOrderHendler}
          ></SusiList>
        </LeftSideMenu>
        <RightSide
          onButtonHendler={this.delOfOrderList}
          totalSumm={totalSumm}
          susiArr={this.state.orderList}
        />
      </div>
    );
  }
}

export default App;
