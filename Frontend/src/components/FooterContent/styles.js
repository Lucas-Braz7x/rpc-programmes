import styled from 'styled-components';

export const FooterInfo = styled.div`
  padding: 12px;
  background: #016597;
  min-height: 104px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  color: #ffffff;
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    font-size: 28px;
    font-style: normal;
    text-transform: uppercase;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ul {
    display: flex;
    gap: 12px;
    list-style: none;

    > li {
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #f2f3f3;
      }
    }
  }

  @media (max-width: 960px) {
    gap: 12px;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    ul {
      li {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 500px) {
    ul {
      li {
        display: none;
      }
    }
  }
`;
