import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class AppComponent extends GfComponent {
  render() {
    const { children } = this.props;
    this.children = children;
  }
}

registerWebComponent('app-component', AppComponent);