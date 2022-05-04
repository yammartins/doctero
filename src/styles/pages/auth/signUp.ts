import styled from 'styled-components';

const Created = styled.div`
 display: flex;
 width: 100%;

  .signup-box {
    display: grid;

    gap: 2.5rem;
    align-items: center;
    width: 100%;

    .first-step {
      width: 100%;
      gap: 1rem;
      display: none;

      .address-box {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.625rem;
      }

      &.is-show {
        display: grid;
        transition: all;
      }
    }
  }
`;

export default Created;
