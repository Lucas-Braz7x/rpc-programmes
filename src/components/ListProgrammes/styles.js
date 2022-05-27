import styled, { keyframes } from 'styled-components';

const bannerAnimation = keyframes`
  from{
    height: 0px;
  }
  to{
    height: auto;
  }
`;

export const CardProgrammeContainer = styled.div`
  cursor: pointer;
  width: 100vw;

  min-height: 66px;
  display: flex;
  flex-direction: column;

  padding: 0 7.8125%;

  background: ${(props) => (props.expand ? '#f2f3f3' : '#f9f8f8')};

  border-top: 1px solid ${(props) => (props.expand ? 'rgba(0,0,0,.1)' : '#f2f3f3')};

  transition: background 0.5s;
  &:hover {
    background: #f2f3f3;
  }
`;
export const Information = styled.div`
  > div {
    > img {
      width: 41px;
      height: 41px;
      border-radius: 4px;
    }
    display: flex;
    gap: 30px;
    align-items: center;
  }
  min-height: 66px;
  display: flex;
  align-items: center;
  width: 1080px;
  justify-content: space-between;

  @media (max-width: 500px) {
    > div {
      width: 220px;

      > img {
        display: none;
      }
      > div {
        width: 40%;
        min-width: 110px;
        height: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;

export const MoreInfo = styled.div`
  display: ${(props) => (props.expand ? 'flex' : 'none')};
  background: #f2f3f3;

  gap: 30px;

  margin: 30px 91px 60px 91px;
  animation: ${bannerAnimation} 0.4s ease-out forwards;

  > img {
    width: 324px;
    min-width: 280px;
    height: 182px;
    border-radius: 3px;
  }

  @media (max-width: 900px) {
    margin: 30px 0;
    flex-direction: column;
    > img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Arrow = styled.img`
  display: block;
  width: 14px;
  height: 14px;
`;

export const ShowingNow = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => (props.showingNow ? 'red' : '')};
  height: 21px;
  color: ${(props) => (props.showingNow ? '#ffffffff' : '')};
  font-style: ${(props) => (props.showingNow ? 'italic' : 'normal')};
  padding: 4px;
  border-radius: 4px;
  font-weight: 600;
`;
