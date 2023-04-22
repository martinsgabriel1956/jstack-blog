import React from "react";
import Post from "./Post";

export default function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Daily posts</h2>

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
