import styled from 'styled-components';

const View = styled.div`

  .button {
    display: flex;
    position: relative;
    padding: 1rem 0;
    font: 500 1.125rem 'Roboto, sans-serif';
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    &.loading {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: 0.125rem solid ${({ theme }) => theme.gray[300]};
      border-radius: 50%;
      border-top-color: ${({ theme }) => theme.white};
      animation: spin 1.2s ease-in-out infinite;
      -webkit-animation: spin 1.2s ease-in-out infinite;
    }

    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }

    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }

    &.is-full {
      width: 100%;
    }

    &.is-primary {
      background-color: ${({ theme }) => theme.blue[500]};
      color: ${({ theme }) => theme.white};
      transition: 0.3s ease-in-out all;

      &:hover {
        background-color: ${({ theme }) => theme.blue[600]};
        transition: 0.3s ease-in-out all;
      }

      &:focus {
        background-color: ${({ theme }) => theme.blue[700]};
        transition: 0.3s ease-in-out all;
      }
    }

    &.is-secondary {
      background-color: ${({ theme }) => theme.indigo[500]};
      color: ${({ theme }) => theme.white};
      transition: 0.3s ease-in-out all;

      &:hover {
        background-color: ${({ theme }) => theme.indigo[600]};
        transition: 0.3s ease-in-out all;
      }

      &:focus {
        background-color: ${({ theme }) => theme.indigo[700]};
        transition: 0.3s ease-in-out all;
      }
    }

  }
`;

export default View;
