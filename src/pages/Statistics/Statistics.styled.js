import styled from 'styled-components';
import Select from 'react-select';

/*DoughnutChart*/

export const Title = styled.p`
  width: 280px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 8px;

  font-family: ${p => p.theme.fonts.accentText};
  font-size: ${p => p.theme.fontSizes[4]};
`;

export const Text = styled.p`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  font-family: ${p => p.theme.fonts.accentTextBold};

  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 27px;
`;

export const ChartWrapper = styled.div`
  position: relative;

  width: 280px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    width: 288px;
    height: 288px;
  }
`;

/*DateForm*/
/*Select*/
export const SelectInput = styled(Select)`
  width: 280px;
  height: 50px;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.button};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fonts.baseFont};

  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${p => p.theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${p => p.theme.fontSizes[3]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: $ ${p => p.theme.fontSizes[3]};
  }
`;
/*Transactions list*/

export const Head = styled.ul`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
`;

export const HeadItem = styled.li`
  font-family: ${p => p.theme.fonts.baseFontBold};
  padding: 16px;
`;

export const Body = styled.ul`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: normal;
  border-bottom: 1px solid #ddd;
`;
export const BodyItemColor = styled.li`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
  background-color: ${({ color }) => color};
`;

export const BodyItemCategory = styled.li`
  width: calc(45%);
  padding: 10px;
`;

export const BodyItemSum = styled.li`
  padding: 10px;
  margin-left: auto;
`;

export const Footer = styled.ul`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterItem = styled.li`
  font-family: ${p => p.theme.fonts.baseFontBold};
  margin-left: 10px;
  padding: 10px;
`;

export const FooterExpense = styled.li`
  padding: 10px;
  color: ${p => p.theme.colors.expense};
`;

export const FooterIncome = styled.li`
  padding: 10px;
  color: ${p => p.theme.colors.income};
  margin-bottom: 60px;
`;
