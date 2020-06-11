import React from 'react';
import styles from './index.less';
import Header from '../components/header/index';
import LeftNav from '../components/LeftNav/index';
import Footer from '../components/Footer/index';
import Pro from './products'

export default () => {
  return (
    <div>
      <Header />
      <LeftNav />
      <Footer />
      <Pro />
    </div>
  );
}
