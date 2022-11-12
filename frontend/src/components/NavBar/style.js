import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: start;
  height: 100%;
  width: 15vw;
  box-shadow: 1px 0px 5px 0.2px rgba(0, 0, 0, 0.2);
  .mod {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 2px 5px 0.2px rgba(0, 0, 0, 0.2);
  }
  h3 {
    font-size: 18px;
    padding-left: 10px;
  }
  ul {
    margin-top: 10px;
    padding-left: 5px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    li {
      font-size: 15px;
      font-weight: 600;
      color: black;

      margin: 7px;

      display: flex;
      gap: 12px;
      align-items: center;
    }
    li:hover {
      cursor: pointer;
      color: #ff577f;
    }
    li:clicked {
      color: red;
    }
  }
`;
