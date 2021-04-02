// import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';

export const TravelSmallStyles = createGlobalStyle`
.travel-small-content {
  padding: 1.5rem;
  color:#08415C;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .activity-name-price{
    display:flex;
    margin-bottom:0.5rem;
    // align-items: center;
    justify-content: space-between;
    

    .activity-name{
      width: 40%; 
      h2 {
        font-weight: bold;
        font-size: 1.2em;
        width:100%;
      }
    }

    .activity-price{
      font-family: 'Open Sans', Arial, sans-serif;
      display: flex;
      width: 60%;
      align-items: flex-end;
      justify-content: flex-end;
      
      .activity-price-prefix{
      font-size: 14px;
      line-height: 1.428571429;
      }

      .activity-price-amount{
          color: #ffae3b;
          font-size: 24px;
          line-height: 24px;
          white-space: nowrap;
          padding-left: 0.5rem;
        }
     }
  }
 
  .activity-location{
    .location{
        font-weight: bold;        
      }
      margin-bottom: 1rem; 
    }

  .activity-baseline{
    margin-bottom: 1rem;
  }

  .activity-date {
    margin-bottom: 0.5rem;
    .date{
        font-weight: bolder;
    }
    
  }
  
    .activity-duration{
        margin-bottom: 1rem;
        .duration{
            font-weight: bold;
        }
     }

     .ui-star-rating{
      margin-bottom: 0.5rem;
     }

    a {
      color: #f18042;
      cursor: pointer;
      font-weight: lighter;
       &:hover {
         text-decoration: underline;
      }
  }
`;
export default TravelSmallStyles;
