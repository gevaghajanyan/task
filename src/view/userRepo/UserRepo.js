import GfComponent from '../../lib/GFComponent';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import './userRepo.css';

class UserRepo extends GfComponent {

  connectedCallback() {
    const { language, name } = this.props;
    this.language = language || this.getAttribute('language');
    this.name = name || this.getAttribute('name');
    super.connectedCallback();
  }

  render() {
    this.innerHTML = `
      <span>name: ${ this.name }</span>  
      <span>language: ${ this.language || 'N/A' }</span>  
    `
  }
}

registerWebComponent('user-repo', UserRepo);