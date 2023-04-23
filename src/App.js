import React from "react";
import Header from "./Header";
import Post from "./Post";

const posts = [
  {
    title: "First New Title",
    subtitle: "First New Subtitle",
    likes: 20,
  },
  {
    title: "Second New Title",
    subtitle: "Second New Subtitle",
    likes: 10,
  },
  {
    title: "Third New Title",
    subtitle: "Third New Subtitle",
    likes: 50,
  },
];

export default function App() {
  return (
    <>
      <Header>
        <h2>Daily posts</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}
