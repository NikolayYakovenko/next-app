import React from 'react';

import Link from 'next/link';

import { Routes } from '../../constatnts/routes';

import navStyles from './navigation.module.css';

export const Navigation = () => {
  return (
    <ul className={navStyles.wrapper}>
      <li className={navStyles.navItem}>
        <Link className={navStyles.navLink} href={Routes.main}>
          Home
        </Link>
      </li>
      <li className={navStyles.navItem}>
        <Link className={navStyles.navLink} href={Routes.login}>
          Login
        </Link>
      </li>
    </ul>
  );
};
