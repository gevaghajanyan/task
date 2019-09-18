import GitHubApiHandler from './GitHubApiHandler';

const END_POINTS = {
  prefix: 'repositories',
};

class RepositoriesApiHandler extends GitHubApiHandler {
  constructor(prefix) {
    super(prefix);
  }

  getAllRepositories() {
    return this.get();
  }

}

const repositoriesApiHandler = new RepositoriesApiHandler(END_POINTS.prefix);
export default repositoriesApiHandler;