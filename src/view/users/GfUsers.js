import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import userService from '../../services/userService';
import userCard from '../userCard';
import './user.css';
import searchComponent from '../search';

class GfUsers extends GfComponent {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async getAllUsers() {
    const response = await userService.getUsers();
    this.setState('users', response);
  }

  async connectedCallback() {
    await this.getAllUsers();
    this.list = document.createElement('section');
    super.connectedCallback();
  }

  render() {
    this.clear();
    const {users} = this.state;
    this.appendChild(searchComponent({
      onSubmit: async value => {
        const user = await userService.getUser(value);
        if (user.hasOwnProperty('login')) {
          this.setState('users', [user]);
        }
      },
      onBlur: async value => {
        if (value === '') {
          await this.getAllUsers();
        }
      }
    }));
    this.addChildren(Array.isArray(users) ? users.map(user => {
      return userCard(user);
    }) : []);
  }
}

registerWebComponent('users-component', GfUsers);
