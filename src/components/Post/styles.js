import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 1.5rem;

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? "#f00" : "#FFF"};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;
export const Rate = styled.span`
  font-size: 0.625rem;
  opacity: 0.7;
`;
