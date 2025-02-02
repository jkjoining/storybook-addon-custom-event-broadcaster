import { styled } from "@storybook/theming";

const tableStyle = {
  borderCollapse: "collapse",
  borderSpacing: "0px",
  color: "rgb(0, 0, 0)",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "left",
  width: "100%",
  margin: "0px",
      // Dark mode specific styles (overrides light mode)
      '@media (prefers-color-scheme: dark)': {

        color: '#FFFFFF', // Change text color for dark mode
        boxShadow: 'rgb(255 255 255 / 10%) 0 0 0 1px inset', // Change box shadow for dark mode
      },
};

export const StyledTable = styled.table(tableStyle);

const tableRowStyle = {
  borderTop: "1px solid rgb(230, 230, 230)",
};

export const StyledTableRow = styled.tr(tableRowStyle);

const tableCellStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
};

export const StyledTableCell = styled.td(tableCellStyle);

export const StyledTableCellFirst = styled(StyledTableCell)`
  padding-left: 20px;
`;

export const StyledTableHeadCell = styled.th(tableCellStyle);

export const StyledTableHeadCellFirst = styled(StyledTableHeadCell)`
  padding-left: 20px;
`;
