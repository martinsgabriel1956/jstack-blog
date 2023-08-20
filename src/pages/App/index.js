import React, { useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { ThemeProvider } from "../../providers/ThemeProvider";

import styles from "../../styles/App.scss";

const mockedPosts = [
  {
    id: Math.random(),
    title: "First New Title",
    subtitle: "First New Subtitle",
    likes: 20,
    read: false,
    removed: false,
  },
  {
    id: Math.random(),
    title: "Second New Title",
    subtitle: "Second New Subtitle",
    likes: 10,
    read: true,
    removed: false,
  },
  {
    id: Math.random(),
    title: "Third New Title",
    subtitle: "Third New Subtitle",
    likes: 50,
    read: false,
    removed: false,
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
    const modifiedPosts = (post) =>
      post.id === postId
        ? {
            ...post,
            removed: true,
          }
        : {
            ...post,
          };

    const getFilteredPost = (prevState) => prevState.map(modifiedPosts);
    setPosts(getFilteredPost);
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Daily posts</h2>
        <button onClick={handleRefresh}>Update</button>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}
