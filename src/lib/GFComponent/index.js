class GfComponent extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.props = {};
  }

  setProps(newProps) {
    this.props = {...this.props, ...newProps};
    this.render()
  }

  setState(key, value) {
    this.state = {...this.state, [key]: value};
    this.render()
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.clear();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  clear() {
    this.innerHTML = '';
  }

  adoptedCallback() {
  }


  render() {
  }

  connect(data) {
    this.setProps({data})
  }

  addChildren(childList) {
    Array.isArray(childList) && childList.forEach(child => this.appendChild(child));
  }

  set children(childList) {
    this.innerHTML = '';
    Array.isArray(childList) && childList.forEach(child => this.appendChild(child));
  }
}

export default GfComponent;