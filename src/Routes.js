import App from './App';
import Home from './containers/Home';
import Login from './containers/Login';
import Translation from './containers/Translation';
import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    key: 'app',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        key: 'home',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/login',
        key: 'login',
        exact: true,
        component: Login,
        // loadData: Home.loadData
      },
      {
        path: '/translation',
        key: 'translation',
        exact: true,
        component: Translation,
        loadData: Translation.loadData,
      },
      {
        component: NotFound,
      },
    ],
  },
];

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login" exact component={Login}></Route>
//   </div>
// );
