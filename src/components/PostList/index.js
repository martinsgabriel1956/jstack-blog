import React, { Component } from "react";
import { Container } from "./styles";
import Post from "./Post";
import posts from "../../utils/posts";

export function PostsList() {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} />
      ))}
    </Container>
  );
}
