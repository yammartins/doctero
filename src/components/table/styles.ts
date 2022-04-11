import styled from 'styled-components';

import { colors } from '~/styles';

const {
  white,
  black,
  gray,
} = colors;

const View = styled.div`
 .table {
   .table-wrapper {
     position: relative;
     width: 100%;

     .table-head {
       display: flex;

       &-row {
        display: flex;
        gap: 3rem;
        align-items: center;
        width: 100%;

          .header-row {
          padding: 1.5rem 0 1.25rem 2.5rem;
          color: ${gray[400]};

          p {
            display: flex;
            gap: 1rem;
            align-items: center;

            svg {
              width: 2rem;
              height: 2rem;
            }
          }
        }
       }

     }

     .table-body {
       display: flex;
       background: ${white};
       border-radius: 0px 0px 0.5rem 0.5rem;

       &-general {
         display: flex;
         width: 100%;
         align-items: center;

         .table-body-row {
           padding: 1rem 0 1rem 2.5rem;
           color: ${gray[400]};

           p {
             display: flex;
             gap: 1rem;
             align-items: center;

             .body-request {
               background-color: ${gray[100]};
               width: 2rem;
               height: 2rem;
               align-items: center;
               border-radius: 9999px;

               svg {
                 height: 100%;
                 width: 100%;
               }
             }
           }
         }

         .extend {
           position: absolute;
           right: 2.5rem;
           cursor: pointer;
         }
       }

     }

     &.auto {
       table-layout: auto;
     }

     &.fixed {
       table-layout: fixed;
     }
   }
 }
`;

export default View;
