import { CXLBaseCard } from './cxl-base-card.js';
import minidegreeCardStyles from '../../styles/cxl-minidegree-card-css.js';

export class CXLMinidegreeCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, minidegreeCardStyles];
  }
}

customElements.define('cxl-minidegree-card', CXLMinidegreeCard);
