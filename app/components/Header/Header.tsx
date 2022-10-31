import React from 'react';

import { Navigation } from '../Navigation';

import headerStyles from './header.module.css';

export const Header = () => {
  return (
    <header className={headerStyles.headerWrapper}>
      <Navigation />
    </header>
  );
};
