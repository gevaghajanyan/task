import Observer from '../core/clases/Observer';
import repositoriesApiHandler from './apiHandlers/repositoriesApiHandler';

class RepositoriesServices extends Observer {
  constructor(repositoriesApiHandler) {
    super([]);
    this.repositoriesApiHandler = repositoriesApiHandler;
  }

  async getRepositories() {
    return await this.repositoriesApiHandler.getAllRepositories();
  }
}

const repositoriesServices = new RepositoriesServices(repositoriesApiHandler);
export default repositoriesServices;