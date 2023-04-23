import React from "react";
import Header from "./Header";
import Post from "./Post";

export default function App() {
  return (
    <>
      <Header>
        <h2>Daily posts</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: "First New Title",
          subtitle: "First New Subtitle",
        }}
      />
      <Post
        likes={10}
        post={{
          title: "Second New Title",
          subtitle: "Second New Subtitle",
        }}
      />
      <Post
        likes={50}
        post={{
          title: "Third New Title",
          subtitle: "Third New Subtitle",
        }}
      />
    </>
  );
}
