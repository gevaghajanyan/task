import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';

class SearchComponent extends GfComponent {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }


  connectedCallback() {
    this._createForm();
    super.connectedCallback();
  }

  _createForm() {
    this.form = document.createElement('form');
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.props.onSubmit(this.state.value)
    });
    const input = document.createElement('input');
    input.addEventListener('change', e => this.setState('value', e.target.value));
    input.addEventListener('blur', () => this.props.onBlur(this.state.value));
    this.form.appendChild(input);
    this.appendChild(this.form);
  }

  render() {

  }

}

registerWebComponent('search-input', SearchComponent);