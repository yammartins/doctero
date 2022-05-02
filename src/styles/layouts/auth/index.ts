import styled from 'styled-components';

const View = styled.div`
   height: 100%;
   width: 100%;

  .container {
    height: 100%;
    width: 100%;
    padding: 0 2.5rem;
    background-color: ${({ theme }) => theme.gray[100]};
    display: flex;
    position: relative;
    /* justify-content: center;
    align-items: center; */

    .main {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 2.5rem;
      align-items: center;
      margin: auto;
      padding: 1.5rem 1rem;
      border-radius: 0.375rem;
      width: 30rem;

      &-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .logo {
          align-self: center;
        }

        .auth-description {
          color: ${({ theme }) => theme.gray[400]};
        }
      }

      &-body {
        width: 100%;
      }
    }
  }

`;

export default View;
