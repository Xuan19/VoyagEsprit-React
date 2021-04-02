// import styled from '@emotion/styled';
import styled, { createGlobalStyle } from 'styled-components';
import ReactSelect from 'react-select';

export const ButtonStyled = styled.input`
  padding: 3px 9px;
  font-family: sans-serif;
  width: 100%;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ced4da;
  background-color: #cce2ff;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(0,0,0,.87);
  height: 3rem;
  &:hover {
    color: hsl(0, 0%, 20%);
  } 
  `;

export const CategorySelect = styled(ReactSelect)`
  &.react-select-container  {
    .react-select__control{
      .react-select__value-container{
          height: 3rem;
      }
    }
    .react-select__menu{
      .react-select__menu-list{
        background-color: white;
        .react-select__option{
          }
      }
    }
  }
`;

export const DestinationSelect = styled(ReactSelect)`
  &.react-select-container  {
    .react-select__control{
      .react-select__value-container{
          height: 3rem;
      }
    }
    .react-select__menu{
      .react-select__menu-list{
        background-color: white;
        .react-select__option{
          }
      }
    }
  }
`;

export const DatePickerWrapperStyles = createGlobalStyle`
 .datePicker {
  width: 100%; 
  .react-datepicker__input-container{        
      input{
          border: 0.1px solid hsl(0, 0%, 80%);
          border-radius: 4px;
          width: 100%;
          display:block;
          margin:auto;
          height: 3rem;
          color: hsl(0, 0%, 20%);
          padding: 0px 9px;
      }
 
      
        // .react-datepicker__close-icon::before,
        // .react-datepicker__close-icon::after {
        //   background-color: grey;
        //   }
    }
}
`;
