import GfComponent from '../../lib/GFComponent';
import gfButton from '../button';
import registerWebComponent from '../../core/helpers/registerWebComponent';
import './pagination.css';

const paginationTypes = {
  prev: 'prev',
  next: 'next'
};

const step = 20;

class PaginationComponent extends GfComponent {
  constructor() {
    super();
    this.state = {
      skip: 0,
      take: step
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  onClick(type) {
    const {skip, take} = this.state;
    const {length} = this.props;

    switch (type) {
      case paginationTypes.next:
        if (skip + step >= length) return;
        this.setState('skip', skip + step);
        break;
      case paginationTypes.prev:
        if (skip - step < 0) return;
        this.setState('skip', skip - step);
        break;
      default:
        return;
    }
  }

  _renderHeader() {
    const header = document.createElement('header');
    header.appendChild(gfButton({
      content: '<=Prev',
      onClick: () => this.onClick(paginationTypes.prev)
    }));
    header.appendChild(gfButton({
      content: 'Next=>',
      onClick: () => this.onClick(paginationTypes.next)
    }));
    return header;
  }

  _renderData() {
    const { data, renderComponent } = this.props;
    const { skip, take } = this.state;
    return Array.isArray(data) && data.slice(skip, skip + take).forEach(elem => {
      this.appendChild(renderComponent({...elem}));
    })

  }

  render() {
    this.innerHTML = '';
    this.appendChild(this._renderHeader());
    this._renderData()
  }
}

registerWebComponent('pagination-component', PaginationComponent);