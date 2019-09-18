import GitHubApiHandler from './GitHubApiHandler';

const END_POINTS = {
  prefix: 'users',
  repos: 'repos'
};

class UserApiHandler extends GitHubApiHandler {
  constructor(prefix) {
    super(prefix);
  }

  getUsers() {
    return this.get();
  }

  getUserByUserLogin(login) {
    return this.get(login);
  }

  getUserReposByLogin(login) {
    return this.get(`${login}/${END_POINTS.repos}`)
  }

}

const userApiHandler = new UserApiHandler(END_POINTS.prefix);
export default userApiHandler;