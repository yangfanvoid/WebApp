import React from 'react';
import { connect } from 'dva';
import styles from './UsersPage.css';
import MainLayout from '../components/MainLayout/MainLayout';


function UsersPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        按需加载
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UsersPage);
