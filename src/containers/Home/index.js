import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getHomeList } from './store/action';
import styles from './style.css';

// const Home = (props) => {
//   return (
//     <div>
//       <Header />
//       <div>home,welcome,{props.name}</div>
//       <button onClick={() => alert('123')}>click</button>
//     </div>
//   );
// };

class Home extends Component {
  constructor(props) {
    super(props);
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }
  }

  getList() {
    return this.props?.list?.map((it) => <div key={it.id}>{it.title}</div>);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>测试</title>
          <meta name="description" content="测试ssr" />
        </Helmet>
        <div className={styles.test}>
          {this.getList()}
          <button onClick={() => alert('123')}>测试</button>
        </div>
      </>
    );
  }

  componentDidMount() {
    if (!this.props?.list?.length) {
      this.props.getHomeList();
    }
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList());
};

const mapStateToprops = (state) => ({
  list: state.home.newsList,
});

const mapDispatchToprops = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToprops, mapDispatchToprops)(Home);
