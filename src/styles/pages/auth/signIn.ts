import styled from 'styled-components';

const View = styled.div`
   width: 100%;

  .form-signin {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .input-box {
      display: grid;
      gap: 1rem;

      a {
        display: flex;
        justify-content: flex-end;
        color: ${({ theme }) => theme.blue[400]};
        font: 500 0.875rem 'Roboto, sans-serif';
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        display: flex;
        justify-content: flex-end;
        color: ${({ theme }) => theme.blue[400]};
        font: 500 0.875rem 'Roboto, sans-serif';
      }
    }

  }
`;

export default View;
