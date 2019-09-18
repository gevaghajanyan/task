import './usercard.css';
import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import routeService from '../../services/routeService';

class UserCard extends GfComponent {

  connectedCallback() {
    let {login} = this.props;
    this.addEventListener('click', () => routeService.push(`/user`, {login}));
    super.connectedCallback();
  }

  static get bservedAttributes() {
    return ['login', 'avatar-url']
  }

  render() {
    let {avatar_url, login} = this.props;
    login = login || this.getAttribute('login');
    avatar_url = avatar_url || this.getAttribute('avatar-url');

    this.innerHTML = `
      <figure class="user-card-avatar-content"><img class="user-card-avatar" src="${ avatar_url }" alt="${ login }"/></figure>
      <div class="user-card-name-content"><span>${ login }</span></div>    
    `
  }
}

registerWebComponent('user-card', UserCard);