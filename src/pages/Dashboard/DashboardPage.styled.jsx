import styled from 'styled-components';
import eclipseGray from 'images/ellipses/bottomEllipse.png';
import eclipsePink from 'images/ellipses/topEllipse.png';
import { ReactComponent as AddBtn } from 'images/svg/plus-btn.svg';

export const SvgAddBtn = styled(AddBtn)`
  position: absolute;

  bottom: 35px;
  right: 0;
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }
`;

export const AddTransButton = styled.button``;

export const Wrap = styled.div`
  position: static;
  top: 100%;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: sticky;
  }
`;

export const PageContainer = styled.div`
  outline: 1px solid tomato;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 60px;

  // height: 100vh;

  background-color: ${p => p.theme.colors.backgroundMobile};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 0;
    flex-direction: row;
    background-image: url(${eclipseGray}), url(${eclipsePink});
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    align-items: flex-start;
  }
`;

export const RightSide = styled.div`
width: 50%;
  }
`;

export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 69px;
    margin-right: 89px;
    margin-top: -47px;
    margin-bottom: ${({ pathname }) =>
      pathname === '/home' ? '-83px' : '-103px'};
    border: 1px solid var(--vector-color);
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
