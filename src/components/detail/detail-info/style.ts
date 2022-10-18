import styled from 'styled-components'

export const DetailInfoWrapper = styled.div`
  display: flex;
  height: 600px;

  .main-picture {
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
    }
  }

  .main-picture,
  .else-picture {
    flex: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .else-picture {
    display: flex;
    flex-wrap: wrap;

    .picture {
      position: relative;
      flex: 50%;
      overflow: hidden;
    }
  }

  .cover {
    background-color: #000;
  }

  .picture img {
    transition: transform 0.5s ease;
  }

  &:hover .picture{
    .cover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.3;

      &:hover {
        opacity: 0;
      }
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
`
