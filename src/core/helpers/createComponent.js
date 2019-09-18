const createComponent = (component, options = null) => (props = {}) => {
  return Object.assign(document.createElement(component, options), {props});
};

export default createComponent;