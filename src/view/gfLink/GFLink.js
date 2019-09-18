import GfComponent from '../../lib/GFComponent';
import routeService from '../../services/routeService';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class GFLink extends GfComponent {
  connectedCallback() {
    let { path } = this.props;
    path = path || this.getAttribute('path');
    if (path === routeService.path) {
      this.className = 'active';
    }
    routeService.subscribe(state => {
      if (state === path) {
        this.className = 'active'
      } else {
        this.className = '';
      }
    });
    this.addEventListener('click', () => routeService.push(path || '/'));

    super.connectedCallback();
  }

  static get observedAttributes() {
    return ['title', 'path', 'type'];
  }

  render() {
    let {title} = this.props;
    title = title || this.getAttribute('title');
    this.innerText = title;
  }
}

registerWebComponent('gf-link', GFLink);
