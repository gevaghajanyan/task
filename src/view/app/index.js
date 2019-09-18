import './AppComponent';
import header from '../header';
import createComponent from '../../core/helpers/createComponent';
import routers from '../routers';


const appComponent = createComponent('app-component')({
  children: [
    header,
    routers
  ]
});
export default appComponent;