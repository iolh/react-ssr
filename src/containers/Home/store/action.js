import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

// export const getHomeList = (isServer) => {
//   return (dispatch) => {
//     let url = '';
//     if (isServer) {
//       url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE';
//     } else {
//       url = '/api/news.json?secret=PP87ANTIPIRATE';
//     }
//     return axios.get(url).then((res) => {
//       const list = res.data.data;
//       dispatch(changeList(list));
//     });
//   };
// };

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/api/news.json')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      });
  };
};
