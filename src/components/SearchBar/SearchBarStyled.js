// import styled from '@emotion/styled';
import ReactSelect from 'react-select';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 3px 9px;
  font-family: sans-serif;
  background-color: #cce2ff;
  font-size: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  color: rgba(0,0,0,.87);
  // font-weight: bold;
  height: 3rem;
  &:hover {
    color: hsl(0, 0%, 20%);
  } 
  `;

export const CategorySelect = styled(ReactSelect)`
  &.react-select-container  {
    // justify-content: center;
    .react-select__control{
      .react-select__value-container{
          height: 3rem;
      }
    }
    .react-select__menu{
      .react-select__menu-list{
        background-color: white;
        .react-select__option{
            // background-color: white;
          }
      }
    }
  }
`;

export const DestinationSelect = styled(ReactSelect)`
  &.react-select-container  {
    // width: 100%;
    .react-select__control{
      .react-select__value-container{
          height: 3rem;
      }
    }
    .react-select__menu{
      .react-select__menu-list{
        background-color: white;
        .react-select__option{
            // background-color: white;
          }
      }
    }
  }
`;
