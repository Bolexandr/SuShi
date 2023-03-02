import styled from "styled-components";
import {
  BsFillImageFill,
  BsCartPlus,
  BsCart,
  BsCartDash,
} from "react-icons/bs";

const CardBox = styled.button`
  height: 35px;
  width: 100%;
  background-color: #e49f9f;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  scale: 1;
  padding: 0;
  :active {
    transform: scale(1.05);
    transition: all 0.3s linear;
  }
`;

const ImageCard = styled.div`
  display: block;
  width: 33px;
  height: 33px;
  background-color: #e1ee93;
  border-radius: 5px;
  align-items: centr;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 30px;
    /* height: 21px; */
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
  width: 129px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
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
  height: 14px;
`;
const Button = styled.div`
  border: 2px solid black;
  padding-left: 2px;
  width: 19px;
  height: 19px;
  background-color: #d9d9d9;
  border-radius: 5px;
  padding: 0;
  scale: 1;
  svg {
    margin-top: 1px;
    width: 13px;
    height: 13px;
  }
  :active {
    transform: scale(1.1);
  }
`;

const Card = ({ id, title, price, imgUrl, typeButon, onButtonHendler }) => {
  return (
    <CardBox onClick={() => onButtonHendler(id)}>
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
      <Button>
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
