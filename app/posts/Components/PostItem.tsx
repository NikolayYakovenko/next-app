import React from 'react';
import Link from 'next/link';

import { Post } from '../page';
import css from '../posts.module.css';

export const PostItem = ({ id, title, body }: Post) => {
  return (
    <div>
      <h3>
        <Link className={css.postLink} href={`posts/${id}`}>
          {title}
        </Link>
      </h3>
      <div>{body}</div>
    </div>
  );
};
