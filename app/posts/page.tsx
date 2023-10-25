import React from 'react';
import Link from 'next/link';

import styles from '../../styles/common.module.css';

import css from './posts.module.css';

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
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
              </h3>
              <div>{post.body}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
