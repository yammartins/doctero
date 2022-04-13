import styled from 'styled-components';

import { colors } from '~/styles';

const {
  white,
  black,
  gray,
  green,
  info,
  red,
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
       position: relative;
       display: flex;
       background: ${white};

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

       &-details {
         position: absolute;
         opacity: 0;
         pointer-events: none;
         bottom: -5.75rem;
         left: 0;
         width: 100%;
         display: flex;
         justify-content: space-between;
         padding: 1rem 2.5rem;
         background: ${white};
         transition: all;
         transition-duration: 300;

         .user-data-wrapper {
           width: 100%;
           display: grid;
           grid-template-columns: repeat(3, minmax(0, 1fr));
           grid-row-gap: 1.5rem;
           grid-column-gap: 2.5rem;

           &-itens {
             color: ${gray[900]};
             display: flex;
             flex-direction: column;

             span {
               font-size: 0.875rem;
               font-weight: 500;
               color: ${black};
             }
           }
         }

         .buttons {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;
         justify-content: center;

          .confirm {
           width: 2.5rem;
           height: 2.5rem;
           padding: 0.5rem;
           background: ${green[50]};
           border: none;
           border-radius: 2px;

           .icon-check {
             font-size: 1.5rem;
             color: ${info[200]};
           }
         }

         .delete {
           width: 2.5rem;
           height: 2.5rem;
           padding: 0.5rem;
           background: ${red[100]};
           border: none;
           border-radius: 2px;

           .icon-x {
             font-size: 1.375rem;
             color: ${red[300]};

           }
         }
        }

         &.is-show {
           pointer-events: auto;
           opacity: 100;
           bottom: -9.75rem;
           transition: all;
           transition-duration: 300;
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
