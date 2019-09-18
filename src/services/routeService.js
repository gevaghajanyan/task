import Observer from '../core/clases/Observer';
import parseSearchQuery from '../core/helpers/queryHelpers';

class RouteService extends Observer {
  constructor() {
    super(window.location.pathname);
    this.searchObj = null;
    this.pathHistory = [];
  }

  get path() {
    return this._state;
  }

  get historyState() {
    return window.history.state;
  }

  get search() {
    return parseSearchQuery(window.location.search)
  }

  push(path, data = null, title = '') {
    this.pathHistory.push(path);
    this.searchObj = data;
    window.history.pushState(data, title, path);
    this.setState(path);
  }


}

const routeService = new RouteService();
export default routeService;