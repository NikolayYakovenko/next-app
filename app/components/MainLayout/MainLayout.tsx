import React from 'react';

import { Header } from '../Header';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
