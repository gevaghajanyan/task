import './HeaderComponent';
import createComponent from '../../core/helpers/createComponent';
import gfLink from '../gfLink';


const header = createComponent('header-component')({
  children: [
    gfLink({title: 'Users', path: '/users'}),
    gfLink({title: 'Repos', path: '/repos'}),
  ]
});

export default header;