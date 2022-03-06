import styled from 'styled-components';

const View = styled.div`
  display: flex;
  flex-direction: column;

  .dashboard {
    &-wrapper {
      gap: 1.5rem;
      display: grid;
      margin-top: 3rem;
      padding: 0.25rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      &-card {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }


  }
`;

export default View;
