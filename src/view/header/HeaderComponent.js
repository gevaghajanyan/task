import GfComponent from '../../lib/GFComponent';
import './header.css';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class HeaderComponent extends GfComponent {
  render() {
    const {children} = this.props;

    this.children = children
  }
}

registerWebComponent('header-component', HeaderComponent);