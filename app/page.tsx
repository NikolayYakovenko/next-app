import { Metadata } from 'next';
import React from 'react';

import styles from '../styles/common.module.css';

export const metadata: Metadata = {
  title: 'Main page',
  description: 'Hello on main page',
  icons: '/icon.png',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Main page</h1>
    </main>
  );
}
