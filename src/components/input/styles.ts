import styled from 'styled-components';

const View = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-box {
      display: flex;
      position: relative;
      width: 100%;
      gap: 0.5rem;
      align-items: center;
      padding: 1rem 0.75rem;
      border: 1px solid ${({ theme }) => theme.gray[400]};
      border-radius: 0.5rem;
      transition: 0.3s ease-in-out all;

      label {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${({ theme }) => theme.gray[400]};
        font-family: 'Roboto, sans-serif';
        transition: 0.3s ease-in-out all;

        p {
          position: absolute;
          top: 1.125rem;
          left: 3rem;
          transition: 0.4s ease-in-out all;
        }

        .empty {
          position: absolute;
          top: 1.125rem;
          left: 0.75rem;
          transition: 0.4s ease-in-out all;
        }
      }

      input {
        display: flex;
        width: 100%;
        background-color: inherit;
        outline: transparent;
        font-size: 1.125rem;
        font-family: 'Roboto, sans-serif';
      }

      &:hover {
        border-color: ${({ theme }) => theme.gray[600]};
        transition: 0.3s ease-in-out all;
      }

      &.is-focus {
        border-color: ${({ theme }) => theme.gray[600]};
        transition: 0.3s ease-in-out all;

        label {
          color: ${({ theme }) => theme.gray[600]};
          transition: 0.3s ease-in-out all;

          p {
            font-size: 0.75rem;
            top: -0.675rem;
            left: 1rem;
            background: ${({ theme }) => theme.gray[100]};
            border-radius: 1rem;
            padding: 0 0.25rem;
            transition: 0.4s ease-in-out all;
          }
        }
      }
    }

  }
`;

export default View;
