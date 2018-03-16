import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Drag from '../components/Drag';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Drag style={{ left: 300, top: 500 }} >
          <h1 className={styles.title}>Yay! Welcome to SNK!</h1>
        </Drag>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
