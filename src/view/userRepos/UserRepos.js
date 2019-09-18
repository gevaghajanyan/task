import registerWebComponent from '../../core/helpers/registerWebComponent';
import GfComponent from '../../lib/GFComponent';
import userService from '../../services/userService';
import './userRepos.css';
import userRepo from '../userRepo';
import paginationComponent from '../paginationComponent';


class UserRepos extends GfComponent {
  constructor() {
    super();
    this.state = {
      repos: [],
    }
  }

  static get observedAttributes() {
    return ['login'];
  }

  async connectedCallback() {
    const login = this.props.login || this.getAttribute('login');
    const response = await userService.getUserRepos(login);
    this.setState('repos', response);
    super.connectedCallback();
  }

  _renderRepos() {
    this.innerHTML = '';
    return paginationComponent({
      data: this.state.repos,
      length: this.state.repos.length,
      renderComponent: userRepo
    })
  }




  render() {
    this.appendChild(this._renderRepos());
  }
}

registerWebComponent('user-repos', UserRepos);