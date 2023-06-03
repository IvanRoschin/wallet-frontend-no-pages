import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/trash.svg';

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;

  padding: 20px;
  font: ${p => p.theme.fonts.baseFontBold};
  font-size: 18px;
  line-height: 27px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }
`;

export const Table = styled.table`
  border-collapse: separate;

  width: 500px;
  margin-left: auto;
  margin-right: auto;

  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.text};
  font-size: ${prop => prop.theme.fontSizes[2]};

  background-color: ${p => p.theme.colors.background};
`;

export const Thead = styled.thead`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
export const Tr = styled.tr`
  background-color: '#fff';
  border-bottom: 1px solid #ddd;
`;
export const ThTitle = styled.th`
  background-color: '#fff';
`;
export const ThColor = styled.th`
  width: 20px;
  height: 20px;
  display: block;
  margin-left: 30px;
`;
export const ThName = styled.th`
  background-color: '#fff';
`;
export const ThType = styled.th`
  color: ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};
`;
export const ThDelete = styled.th`
  background-color: '#fff';
`;
export const BtnDelete = styled.button`
  top: ${p => p.theme.space[4] + 4}px;
  // right: ${p => p.theme.space[0]}px;
  left: 215px;

  border: ${p => p.theme.borders.none};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.menuText};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.expense};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => p.theme.space[5] + 12}px;
    height: ${p => p.theme.space[5] + 12}px;

    border-radius: ${p => p.theme.radii.circular};
    background-color: ${p => p.theme.colors.background};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const DeleteIcon = styled(Icon)`
  text-aling: center;
  fill: currentColor;
`;
