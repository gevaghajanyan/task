import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import './button.css';

class Button extends GfComponent {
  connectedCallback() {
    this.addEventListener('click', this.props.onClick);
    super.connectedCallback();
  }

  render() {
    this.innerHTML = this.props.content
  }
}

registerWebComponent('gf-button', Button);
