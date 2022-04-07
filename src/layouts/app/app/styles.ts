import styled from 'styled-components';

import { colors, easing } from '~/styles';

const {
  info,
  gray,
  white,
} = colors;

// const {
//   rubber,
// } = easing;

const View = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${gray[250]};

  .app {

    &-menu {
      display: flex;
      flex-direction: column;
      gap: 1px;

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
         background: ${gray[350]};
         margin-bottom: 0.25rem;

        }
      }

      &-items {
        width: 100%;
        padding: 1.25rem 6.5rem;
        display: flex;
        justify-content: space-between;
        background: ${white};

        a {
          display: flex;
          gap: 1.25rem;
          font-weight: 500;
          color: ${gray[450]};
          stroke: ${gray[450]};
          transition: all;
          transition-duration: 250;

          &:hover {
            color: ${info[200]};
            stroke: ${info[200]};
            transition: all;
            transition-duration: 250;
          }
        }
      }
    }
  }
`;

export default View;
