import GfComponent from '../../lib/GFComponent';
import userService from '../../services/userService';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import { getFullDate } from '../../core/helpers/dateConvertors';
import './userInfo.css'
import userRepos from '../userRepos';
import routeService from '../../services/routeService';

class UserInfoComponent extends GfComponent {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  async connectedCallback() {
    const {login, avatar_url} = this.props;
    this.login = login || this.getAttribute('login') || routeService.historyState.login;
    this.avatarUrl = avatar_url || this.getAttribute('avatar-url');
    if (this.login) {
      const response = await userService.getUser(this.login);
      this.setState('user', response);
    }
    super.connectedCallback();
  }

  render() {

    const {user} = this.state;
    this.login = user ? user.login : this.login;
    this.avatarUrl = user ? user.avatar_url : this.avatarUrl;
    if (user) {
      this.innerHTML = `
        <header><gf-link path="/users" title="back"></gf-link></header>
        <section class="user-info-main">
          <user-card login="${ user.login }" avatar-url="${ user.avatar_url }"></user-card>
          <div>
            <p>Name :${user.name || '-'}</p>
            <p>Email :${user.email || '-'}</p>
            <p>Company :${user.company || '-'}</p>
            <p>Followers :${user.followers || 0}</p>
            <p>Following :${user.following || 0}</p>
            <p>Created at :${getFullDate(user.created_at) || ''}</p>
          </div>
        </section>
        <footer>
          <h3>
            User Repositories
          </h3>
          <user-repos login="${user.login}"></user-repos>
        </footer>
      `
    }
  }
}

registerWebComponent('user-info', UserInfoComponent);