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
        color: ${({ theme }) => theme.indigo[500]};
        font: 600 0.875rem 'Roboto, sans-serif';
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;

        margin-top: 1.5rem;
        color: ${({ theme }) => theme.gray[500]};

        a {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.indigo[500]};
        font: 600 0.875rem 'Roboto, sans-serif';
       }
      }
    }

  }
`;

export default View;
