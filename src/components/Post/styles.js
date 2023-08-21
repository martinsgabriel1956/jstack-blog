import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.removed ? 0.5 : 1)};
  color: ${(props) => (props.removed ? "red" : "#FFF")};
`;

export const Subtitle = styled.small`
  display: block;
`;
export const Rate = styled.span`
  font-size: 0.625rem;
  opacity: 0.7;
`;
