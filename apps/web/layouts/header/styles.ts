import styled from 'styled-components';

const View = styled.div`
  .header {
    &-image,
    &-wrapper {
      display: flex;
    }

    &-image {
      width: 100%;
      align-items: center;

      & > div {
        width: 100%;
      }
    }

    &-wrapper {
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
    }
  }

  .container .row {
    height: 100%;

    .col {
      display: flex;
    }
  }
`;

export default View;
