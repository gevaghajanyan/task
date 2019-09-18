import Subscriber from './Subscriber';

class Observer {
  constructor(state) {
    this._state = state;
    this._subscrabers = [];
  }

  setState(newValue) {
    this._state = newValue;
    this._notify();
  }

  getState() {
    return this.state;
  }

  subscribe(callback) {
    const subscriber = new Subscriber(callback);
    this._subscrabers.push(subscriber);
    return subscriber.id;
  }

  unSubscribe(id) {
    this._subscrabers = this._subscrabers.filter(sub => sub.id !== id);
  }

  _notify() {
    this._subscrabers.forEach(sub => sub.callback(this._state));
  }

}

export default Observer