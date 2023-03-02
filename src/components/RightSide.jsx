import styled from "styled-components";

import { List } from "./SusiList";
import Card from "./Card";
import { MenuTitle } from "./Menu";

const RihtSideWraper = styled.div`
  width: 50vw;
`;
const OrderList = styled.div`
  height: 100%;
  /* height: 100vh; */
  overflow: scroll;
  background-color: #331b32;
  display: flex;
  flex-direction: column;
  padding-left: 2px;
  padding-right: 3px;
`;

// const HistoryOrderList = styled.div`
//   width: 50vw;
//   min-height: 260px;
//   background-color: #9477d2;
// `;

// const TableHistory = styled.table`
//   font-size: 9px;
//   border: 2px solid orange;

//   th,
//   td {
//     border: 1px solid black;
//   }
//   td {
//     width: 70px;
//     text-align: center;
//     font-weight: 600;
//   }
// `;

const Info = styled.div`
  width: 88px;
  height: 20px;
  margin: 0 auto 3px;
  border-radius: 5px;
  display: inline-flex;
  background-color: #d4ff00b7;
  justify-content: space-around;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 0px;
  letter-spacing: -0.075em;
  p {
    color: #000000;
  }
  button {
    outline: none;
    border: none;
    scale: 1;
    background: transparent;
    font-size: 8px;
    font-weight: bold;
    line-height: 1;
    :active {
      transform: scale(1.05);
      transition: all 0.1s linear;
    }
  }
`;

const RightSide = ({ susiArr, totalSumm, onButtonHendler, clear }) => {
  return (
    <RihtSideWraper>
      <OrderList>
        <MenuTitle>
          <p>Замовлення</p>
        </MenuTitle>
        <Info>
          <p>Сума : </p>
          <p>{totalSumm} грн </p>
        </Info>
        <Info>
          <button onClick={clear}>Очистити список</button>
        </Info>

        <List>
          {susiArr.map(({ id, name, price, photo }) => (
            <li key={id}>
              <Card
                title={name}
                price={price}
                imgUrl={photo}
                typeButon="minus"
                onButtonHendler={onButtonHendler}
                id={id}
              />
            </li>
          ))}
        </List>
      </OrderList>
      {/* <HistoryOrderList>
        <MenuTitle>
          <p>Історія</p>
        </MenuTitle>
        <TableHistory>
          <tr>
            <th>Дата</th>
            <th>Сума</th>
            <th>Нотатки</th>
          </tr>
          <tr>
            <td>{new Date().toLocaleDateString()}</td>
            <td>777 грн</td>
            <td>До ракушки</td>
          </tr>
        </TableHistory>
      </HistoryOrderList> */}
    </RihtSideWraper>
  );
};

export default RightSide;
