import styled from "styled-components";

export const Nav = styled.nav`
display:flex;
flex-direction:column;
align-items:space-between;
justify-content:start;
height:100%;
width:15vw;
border:1px solid black;
ul{
    list-style:none;
    li{
        font-size:14px;
        color:black;
    }
    li:clicked{
        color:red;
    }
}

`