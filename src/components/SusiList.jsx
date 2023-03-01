import styled from "styled-components";
import Card from "./Card";

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SusiList = ({ susiArr, onButtonHendler }) => {
  return (
    <List>
      {susiArr.map(({ id, name, price, photo }) => (
        <li key={id}>
          <Card
            title={name}
            price={price}
            imgUrl={photo}
            typeButon="plus"
            onButtonHendler={onButtonHendler}
            id={id}
          />
        </li>
      ))}
    </List>
  );
};
