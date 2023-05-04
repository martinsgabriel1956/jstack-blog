import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

const mockedPosts = [
  {
    id: Math.random(),
    title: "First New Title",
    subtitle: "First New Subtitle",
    likes: 20,
  },
  {
    id: Math.random(),
    title: "Second New Title",
    subtitle: "Second New Subtitle",
    likes: 10,
  },
  {
    id: Math.random(),
    title: "Third New Title",
    subtitle: "Third New Subtitle",
    likes: 50,
  },
];

export default function App() {
  const [posts, setPosts] = useState(mockedPosts);

  function handleRefresh() {
    const newMockedPost = (prevState) => {
      return {
        id: Math.random(),
        title: `#${prevState.length + 1} New Title`,
        subtitle: `#${prevState.length + 1} New Subtitle`,
        likes: 50,
      };
    };

    const updateMockedPosts = (prevState) => [
      ...prevState,
      newMockedPost(prevState),
    ];

    setPosts(updateMockedPosts);
  }

  function handleRemovePost(postId) {
    const getFilteredPost = (prevState) =>
      prevState.filter((post) => post.id !== postId);
    setPosts(getFilteredPost);
  }

  return (
    <>
      <Header>
        <h2>Daily posts</h2>
        <button onClick={handleRefresh}>Update</button>
      </Header>

      <hr />

      {posts.map((post) => {
        const currentPost = {
          id: post.id,
          title: post.title,
          subtitle: post.subtitle,
        };

        return (
          <Post
            key={post.title}
            likes={post.likes}
            onRemove={handleRemovePost}
            post={currentPost}
          />
        );
      })}
    </>
  );
}
