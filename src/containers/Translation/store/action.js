import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/api/translations.json')
      .then((res) => {
        let list = [];
        if (res.data.success) {
          list = res.data.data;
        }
        dispatch(changeList(list));
      });
  };
};
