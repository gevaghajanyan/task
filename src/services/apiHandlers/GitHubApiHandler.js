import ApiHandler from '../../core/clases/ApiHandler';
import { DOMAIN } from '../../core/constants/urls';

class GitHubApiHandler extends ApiHandler {
  constructor(prefix) {
    super(DOMAIN);
    this.prefix = prefix;
  }

  get(endPoint = '', options) {
    return super.get(`${ this.domain }/${ this.prefix }${ endPoint ? '/' + endPoint : '' }`, options);
  }

  post(endPoint = '', options) {
    return super.post(`${ this.domain }/${ this.prefix }${ endPoint ? '/' + endPoint : '' }`, options);
  }

  put(endPoint = '', options) {
    return super.put(`${ this.domain }/${ this.prefix }${ endPoint ? '/' + endPoint : '' }`, options);
  }

  delete(endPoint = '', options) {
    return super.delete(`${ this.domain }/${ this.prefix }${ endPoint ? '/' + endPoint : '' }`, options);
  }
}

export default GitHubApiHandler;