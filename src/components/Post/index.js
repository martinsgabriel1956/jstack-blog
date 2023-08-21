import React from "react";
import PropTypes from "prop-types";
import { PostHeader } from "./PostHeader";

import { Container, Rate, Subtitle } from "./styles";

export default function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Media: {props.post.likes / 2}</Rate>
    </Container>
  );
}
