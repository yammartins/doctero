import styled from 'styled-components';

import { colors } from '~/styles';

const {
  info,
  gray,
  white,
} = colors;

const View = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .app {

    &-menu {
      display: flex;
      flex-direction: column;
      gap: 1px;
      width: 100%;
      position: fixed;

      &-header {
        width: 100%;
        padding: 1.5rem 6.5rem;
        display: flex;
        justify-content: space-between;
        background: ${white};
        align-items: center;

        .profile {
         height: 2.25rem;
         width: 2.25rem;
         border-radius: 9999px;
         display: flex;
         background: ${gray[100]};

        }
      }

      &-items {
        width: 100%;
        padding: 0.75rem 5rem;
        display: flex;
        background: ${white};

        a {
          width: 100%;
          display: flex;
          gap: 1.25rem;
          font-weight: 500;
          color: ${gray[400]};
          stroke: ${gray[400]};
          transition: all;
          justify-content: center;
          transition-duration: 250;
          position: relative;
          padding: 0.5rem 1.5rem;

          &:hover {
            color: ${info[200]};
            stroke: ${info[200]};
            transition-duration: 250;
            transition: all;

            svg {
              height: 1.5rem;
              width: 1.5rem;
            }
          }

          &.active {
            color: ${info[200]};
            stroke: ${info[200]};
            border-radius: 0.375rem;
            transition: all;
            transition-duration: 250;

              ::after {
              content: '';
              width: 100%;
              height: 4px;
              border-radius: 0.25rem;
              background: ${info[200]};
              position: absolute;
              bottom: -0.75rem;
              left: 0rem;
            }
          }
        }
      }
    }

    &-wrapper {
      padding: 11rem 6.5rem;
    }
  }
`;

export default View;
