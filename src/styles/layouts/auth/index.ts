import styled from 'styled-components';

const View = styled.div`
   height: 100%;
   width: 100%;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;

    .return {
      position: absolute;
      top: 1rem;
      left: 1.5rem;
      cursor: pointer;
      z-index: 2;
    }

    .main {
      display: flex;
      position: relative;
      background-color: ${({ theme }) => theme.white};

      align-items: center;
      flex-direction: column;
      margin: auto;

      gap: 2rem;
      padding: 0 7.5rem;
      border-radius: 0.375rem;
      width: 45%;

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

    .slide {
      width: 55%;
      padding: 8.375rem 6.75rem;
      position: relative;
      background-color: ${({ theme }) => theme.gray[100]};

      .authSwiper {
        width: 100%;
        padding-bottom: 3rem;

        .swiper-pagination-bullets {
          bottom: 0;

          .swiper-pagination-bullet {
            width: 3.75rem;
            height: 0.25rem;
            border-radius: 0.25rem;
          }

          .swiper-pagination-bullet-active {
            background-color: ${({ theme }) => theme.indigo[500]};
          }
        }
      }

      &-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;

        .slide-image {
          border-radius: 0.25rem;
        }

        h2 {
          margin-top: 2rem;
        }

        p {
          color: ${({ theme }) => theme.gray[500]};
        }
      }
    }
  }

`;

export default View;
