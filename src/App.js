import React from "react";
import Header from "./Header";
import Post from "./Post";

export default function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Daily posts</h2>
      </Header>

      <hr />

      <Post
        post={{
          title: "First New Title",
          subtitle: "First New Subtitle",
        }}
      />
      <Post
        post={{
          title: "Second New Title",
          subtitle: "Second New Subtitle",
        }}
      />
      <Post
        post={{
          title: "Third New Title",
          subtitle: "Third New Subtitle",
        }}
      />
    </>
  );
}
