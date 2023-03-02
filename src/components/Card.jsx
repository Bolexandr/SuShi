import styled from "styled-components";
import {
  BsFillImageFill,
  BsCartPlus,
  BsCart,
  BsCartDash,
} from "react-icons/bs";

const CardBox = styled.div`
  height: 23px;
  width: 162px;
  background-color: #e49f9f;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ImageCard = styled.div`
  display: block;
  width: 22px;
  height: 22px;
  background-color: #e1ee93;
  border-radius: 5px;
  align-items: centr;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  img {
    width: 21px;
    height: 21px;
  }
`;

const LabelPriceWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const Label = styled.p`
  background-color: #d9d9d9;
  border-radius: 4px;
  margin: 0;
  width: 95px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.075em;

  color: #12275a;
  text-align: center;
`;
const Price = styled.p`
  background-color: #d9d9d9;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: -0.075em;
  margin: 0;
  border-radius: 4px;
  margin: 0 auto;
  color: #12275a;
  text-align: center;
  width: 55px;
  height: 9px;
`;
const Button = styled.button`
  width: 19px;
  height: 19px;
  background-color: #d9d9d9;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  :active {
    scale: 1.1;
  }

  svg {
    margin-top: 1px;
    width: 13px;
    height: 13px;
  }
`;

const Card = ({ id, title, price, imgUrl, typeButon, onButtonHendler }) => {
  return (
    <CardBox>
      <ImageCard>
        {imgUrl === "./dataBase/images" ? (
          <BsFillImageFill />
        ) : (
          <img src={imgUrl} alt={title} />
        )}
      </ImageCard>
      <LabelPriceWraper>
        <Label>{title}</Label>
        <Price>{price} грн</Price>
      </LabelPriceWraper>
      <Button onClick={() => onButtonHendler(id)}>
        {typeButon === "" ? (
          <BsCart />
        ) : typeButon === "plus" ? (
          <BsCartPlus />
        ) : (
          <BsCartDash />
        )}
      </Button>
    </CardBox>
  );
};

export default Card;
