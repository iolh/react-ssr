import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './store';
import styles from './style.css';

const Header = (props) => {
  if (props.staticContext) {
    console.log(styles._getCss());
    props.staticContext.css.push(styles._getCss());
  }

  return (
    <div className={styles.test}>
      <Link to="/">首页</Link>
      <br />
      {props.login ? (
        <>
          <Link to="/translation">翻译列表</Link>
          <br />
          <button onClick={props.handelLogout}>退出</button>
        </>
      ) : (
        <button onClick={props.handelLogin}>登录</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ login: state.header.login });

const mapDispatchToProps = (dispatch) => ({
  handelLogin() {
    dispatch(actions.login());
  },
  handelLogout() {
    dispatch(actions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
