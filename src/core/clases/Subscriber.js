import createGuid from '../helpers/createGuid';

class Subscriber {
  constructor(callback) {
    this.id = createGuid();
    this.callback = callback;
  }
}

export default Subscriber;