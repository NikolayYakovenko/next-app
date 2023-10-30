import React from 'react';

import styles from '../../styles/common.module.css';

import css from './posts.module.css';
import { PostItem } from './Components/PostItem';

export type Post = {
  id: string;
  title: string;
  body: string;
};


async function getPosts() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => data);

  return response;
}

export default async function Posts() {
  const posts: Post[] = await getPosts();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Posts</h1>
      <div className={css.wrapper}>
        {posts.map((post) => (
          <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </main>
  );
}
