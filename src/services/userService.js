import Observer from '../core/clases/Observer';
import userApiHandler from './apiHandlers/userApiHandler';

class UserService extends Observer {
  constructor(userHandler) {
    super({
      users: [],
      user: {},
    });
    this.userHandler = userHandler;
  }

  async getUsers() {
    const response = await this.userHandler.getUsers();
    this.setState({users: response, ...this.state});
    return response;
  }

  async getUser(login) {
    const response = await this.userHandler.getUserByUserLogin(login);
    this.setState({user: response, ...this.state});
    return response;
  }

  async getUserRepos(login) {
    const response = await this.userHandler.getUserReposByLogin(login);
    this.setState({userRepos: response, ...this.state});
    return response;
  }

}

const userService = new UserService(userApiHandler);

export default userService;