import styled from 'styled-components';

const dbsRed = 'rgb(255,50,51)';
const LoginPageStyles = styled.div`
    .Login-box{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh; 
    }
    .Login-form{
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items:center;
        height: 300px;
        border: 5px solid rgba(255,50,51, 0.7);
    }
    .invalid-alert{
        padding: 5px;
        color: rgba(255,50,51, 0.5);
    }
    .form-group{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        label {
            font-size: 20px;
            fontWeight: 'bold';
        }
    }
    .form-input{
        margin-top: 8px;
        margin-bottom: 10px;
        min-width: 14em;
        height: 40px;
        padding: 0px 10px;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        background-color: #f3f3f3;
        border-radius: 4px;
        border:0;
        transition: all 250ms ease-in-out;
        &:focus{
            outline:none;
            box-shadow: 0px 0px 12px 0.8px rgb(58, 138, 199,0.7);
        }
    }
    .Login-btn{
        background-color: ${dbsRed};
        width: 120px;
        height: 35px;
        border-radius: 4px;
        border: 0;
        margin-top: 20px;
        font-family: 'Open Sans', sans-serif;
        color: white;
        font-size: 18px;
        fontWeight: 'bold';
        &:focus{
            outline: none;
            box-shadow: 0 0 0 1pt ${dbsRed};
        }
    }
    .register{
        padding: 20px;
        color: ${dbsRed};
    }
`;

export default LoginPageStyles;