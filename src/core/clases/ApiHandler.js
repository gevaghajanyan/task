import API_METHODS, { API_HEADERS } from '../constants/apiHandlerConstants';

class ApiHandler {
  constructor(domain) {
    this.domain = domain;
  }


  get(url, options) {
    return ApiHandler.request(url, API_METHODS.GET, options);
  }

  post(url, options) {
    return ApiHandler.request(url, API_METHODS.POST, options);
  }

  put(url, options) {
    return ApiHandler.request(url, API_METHODS.PUT, options);
  }

  delete(url, options) {
    return ApiHandler.request(url, API_METHODS.DELETE, options);
  }

  static request(url, method, options = {}) {
    return fetch(url, {
      method: method,
      headers: ApiHandler._createHeader(),
      ...options
    }).then(res => res.json());
  }

  static _createHeader() {
    return {
      [API_HEADERS.CONTENT_TYPE]: API_HEADERS.APPLICATION_JSON,
    }
  }

}

export default ApiHandler;