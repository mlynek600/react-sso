import { PropsWithChildren } from 'react';
import Navigation from './Navigation';
import './Layout.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className='main-layout'>
      <Navigation />

      <div className='content'>{children}</div>
    </main>
  );
};

export default Layout;
