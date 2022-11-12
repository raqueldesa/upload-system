import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  label {
    font-size: 18px;
  }
  .mod1 {
    margin-top: 0;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 5px 5px 0.2px rgba(0, 0, 0, 0.2);
    height: 60px;
  }
  .FiledInput {
    width: 85vw;
  }
  .upload {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 40%;
    margin: 60px 35px;
  }
  .btns {
    width: 70%;
    display: flex;
    gap: 34px;
  }
`;
