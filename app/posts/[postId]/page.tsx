import React from 'react';

import styles from '../../../styles/common.module.css';
import css from '../posts.module.css';

import { Post } from '../page';

async function getPost(id: string) {
  const response = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return response;
}

export default async function Post({ params }: { params: { postId: string } }) {
  const post: Post = await getPost(params.postId);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={css.wrapper}>{post.body}</div>
    </main>
  );
}
