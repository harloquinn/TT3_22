import styled from 'styled-components';

const BuySellPageStyles = styled.div`
    .assetTitle{
        font-size: 50px;
        color: rgb(255,50,51);
        font-weight: bold;
    } 
    .assetAmount{
        width: 50px;
        height: 40px;
        font-size: 20px;
        text-align: center;
        padding: 10px;
    }
    .buySellButton{
        margin: 0px 20px;
        background-color: rgb(255,50,51);
        width: 100px;
        height: 35px;
        border-radius: 4px;
        border: 0;
        font-family: 'Open Sans', sans-serif;
        color: white;
        font-size: 18px;
        &:focus{
            outline: none;
            box-shadow: 0 0 0 1pt rgb(255,50,51);
        }
    }
`;

export default BuySellPageStyles;