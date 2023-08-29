import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.headerBackgroundColor};
    padding: 0 ${theme.spacing.large}px;
    border-radius: ${theme.borderRadius};

    button {
      font-size: ${theme.spacing.medium}px;
    }
  `}

  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
