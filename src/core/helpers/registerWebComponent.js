const registerWebComponent = (tag, className, option = null) => window.customElements.define(tag, className, option);

export default registerWebComponent;