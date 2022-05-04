import styled from 'styled-components';

const View = styled.div`
  .checkbox-wrapper {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: ${({ theme }) => theme.white};
      margin: 0;
      display: grid;
      place-content: center;

      font: inherit;
      color: ${({ theme }) => theme.indigo[600]};
      width: 1.5rem;
      height: 1.5rem;
      border: 0.15rem solid currentColor;
      border-radius: 50%;
      transform: translateY(-0.075rem);
    }

    input[type="checkbox"]::before {
      content: "";
      width: 1rem;
      height: 1rem;
      transform: scale(0);
      border-radius: 50%;
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1rem 1rem rgba(99, 102, 241, 1);
      background-color: CanvasText;
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }

    p {
      color: ${({ theme }) => theme.gray[400]}
    }
  }
`;

export default View;
