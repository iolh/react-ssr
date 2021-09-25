import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getTranslationList } from './store/action';

const Translation = (props) => {
  const getList = () => {
    return props?.list?.map((it) => <div key={it.id}>{it.title}</div>);
  };

  useEffect(() => {
    if (!props?.list?.length) {
      props.getTranslationList();
    }
  }, []);

  return props.login ? <div>{getList()}</div> : <Redirect to="/" />;
};

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

const mapStateToProps = (state) => ({
  login: state.header.login,
  list: state.translation.translationList,
});

const mapDispatchToprops = (dispatch) => ({
  getTranslationList() {
    dispatch(getTranslationList());
  },
});

export default connect(mapStateToProps, mapDispatchToprops)(Translation);
