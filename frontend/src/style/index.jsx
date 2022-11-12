import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root{
    --black:#121214;
    --glass:#212529;
    --pink:#FF577F;
    --grey:#868E96;
    --grey2:#F8F9FA;
    --inputColor:#343B41;
    --inputWidth:330px;
    --inputHeight:50px;
    
}
body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    width:100%;
    height:100%;
}
`;
