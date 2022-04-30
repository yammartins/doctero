import styled from 'styled-components';

const View = styled.div`

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;

    .body-content {
      padding: 1.5rem;
      display: flex;
      height: 100%;
      width: 50%;
      flex-direction: column;
      justify-content: space-between;

      .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-menu {
          display: flex;
          align-items: center;
          gap: 1.2rem;

        }
      }
    }
  }

`;

export default View;

/* background-color: ${({ theme }) => theme.gray[300]}; */
