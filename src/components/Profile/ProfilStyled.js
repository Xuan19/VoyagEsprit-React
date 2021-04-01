// import styled from '@emotion/styled';
import styled, { createGlobalStyle } from 'styled-components';

export const ButtonStyled = styled.input`
  font-size: 100%;
  line-height: 1.15;
  margin: 1px;
  padding: 3px 9px;
  font-family: sans-serif;
  width: 100%;
  cursor: pointer;
  color: #fff;
  text-align: center;
  border: 1px solid #ced4da;
  background-color: #0277bd;
  border-radius: 4px;
  text-decoration: none;
  // color: rgba(0,0,0,.87);
  height: 3rem;
  &:hover {
    color: hsl(0, 0%, 20%);
  } 
  `;

export const DatePickerWrapperStyles = createGlobalStyle`
 .datePicker {
  width: 100%; 
  .react-datepicker__input-container{        
      input{
        border: solid 1px #cfcfcf;
        height: auto;
        line-height: normal;
        padding: 8px 10px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        font-family: inherit;
        font-size: inherit;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        width: 100%;
        background: #f0f0f0;
      }
  }
}
`;
