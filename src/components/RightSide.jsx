import styled from "styled-components";
import Datetime from "react-datetime";

import { List } from "./SusiList";
import Card from "./Card";
import { MenuTitle } from "./Menu";

const OrderList = styled.div`
  width: 196px;
  height: 426px;
  overflow: scroll;
  background-color: #331b32;
  display: flex;
  flex-direction: column;
`;

const HistoryOrderList = styled.div`
  width: 196px;
  min-height: 260px;
  background-color: #9477d2;
`;

const TableHistory = styled.table`
  font-size: 9px;
  border: 2px solid orange;

  th,
  td {
    border: 1px solid black;
  }
  td {
    width: 70px;
    text-align: center;
    font-weight: 600;
  }
`;

const Info = styled.div`
  width: 88px;
  height: 20px;
  margin: 0 auto 3px;
  border-radius: 5px;
  display: flex;
  background-color: #2d4dadb7;
  justify-content: space-around;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 0px;
  letter-spacing: -0.075em;
  p {
    color: #c29ff0;
  }
`;

const RightSide = ({ susiArr, totalSumm, onButtonHendler }) => {
  return (
    <div>
      <OrderList>
        <MenuTitle>
          <p>Замовленя</p>
        </MenuTitle>
        <Info>
          <p>Сума : </p>
          <p>{totalSumm} грн </p>
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
      <HistoryOrderList>
        {/* <TableHistory>
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
        </TableHistory> */}
      </HistoryOrderList>
    </div>
  );
};

export default RightSide;
