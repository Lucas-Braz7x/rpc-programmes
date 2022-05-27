import styled from 'styled-components';

export const TodayProgrammes = styled.div`
  min-height: 125px;
  width: 100%;
  padding: 20px 0;
  background: #f9f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  input {
    height: 25px;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);

    cursor: pointer;
    padding-left: 5px;

    transition: border-color 0.3s;
    &:hover {
      border-color: #f2f3f3;
    }
    &:focus {
      border-color: #016597;
    }
  }
`;

export const ArrowLeft = styled.img`
  transform: rotate(90deg);

  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(270deg);
`;
