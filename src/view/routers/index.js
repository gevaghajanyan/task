import './Routers';
import createComponent from '../../core/helpers/createComponent';
import usersComponent from '../users';
import userInfoComponent from '../userInfo';
import reposPage from '../repos';

const routers = createComponent('routers-component')({
  defaultPath: '/users',
  routs: [
    {
      path: '/users',
      component: usersComponent
    },
    {
      path: '/user',
      component: userInfoComponent
    },
    {
      path: '/repos',
      component: reposPage
    }
  ]
});
export default routers;