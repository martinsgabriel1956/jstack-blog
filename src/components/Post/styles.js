import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.postBackgroundColor};
    padding: ${theme.spacing.large}px;
    border-radius: ${theme.borderRadius};

    h2 {
      margin: 0 0 ${theme.spacing.small}px;
    }

    & + article {
      margin-top: ${theme.spacing.small}px;
    }
  `}

  display: flex;
  flex-direction: column;

  small {
    opacity: 0.7;
  }
`;
