import styled from "styled-components";

const MainMenu = styled.div`
  width: 182px;
  background-color: #c570c1;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuTitle = styled.div`
  width: 85px;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  p {
    /* font-style: italic; */
    font-weight: bold;
    color: #291834;
    font-size: 12px;
    line-height: 2.15;
    text-align: center;
    margin: 0;
  }
`;

export const LeftSideMenu = ({ children }) => {
  return (
    <MainMenu>
      <MenuTitle>
        <p>Перелік ролів</p>
      </MenuTitle>
      {children}
    </MainMenu>
  );
};
