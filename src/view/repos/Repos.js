import GfComponent from '../../lib/GFComponent';
import repositoriesServices from '../../services/repositoriesServices';
import paginationComponent from '../paginationComponent';
import userRepo from '../userRepo';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class Repos extends GfComponent {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  async connectedCallback() {
    const response = await repositoriesServices.getRepositories();
    this.setState('repos', response);
    super.connectedCallback();
  }


  _renderRepos() {
    this.clear();
    return paginationComponent({
      data: this.state.repos,
      length: this.state.repos.length,
      renderComponent: userRepo
    })
  }

  render() {
    this.appendChild(this._renderRepos())
  }
}
registerWebComponent('repos-page', Repos);