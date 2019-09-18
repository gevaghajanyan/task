import GfComponent from '../../lib/GFComponent';
import routeService from '../../services/routeService';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class Routers extends GfComponent{
  constructor() {
    super();
    this.state = {
      path: routeService.path
    }
  }

  connectedCallback() {
    this.subId = routeService.subscribe(state => this.setState('path', state));
    super.connectedCallback();
  }

  disconnectedCallback() {
    routeService.unSubscribe(this.subId);
    super.disconnectedCallback();
  }

  _render() {
    this.innerHTML = '';
    const selectedComponent = this.props.routs.find(rout => rout.path === this.state.path);
    if(selectedComponent) {
      return selectedComponent.component;
    } else {
      routeService.push(this.props.defaultPath);
      return document.createDocumentFragment();
    }

  }

  render() {
    this.appendChild(this._render());
  }

}

registerWebComponent('routers-component', Routers);