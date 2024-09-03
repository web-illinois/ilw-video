import { LitElement, html } from 'lit';
import styles from './ilw-video.styles'
import './ilw-video.css';

class Video extends LitElement {
    static get properties() {
        return {
            aspectRatio: { type: String, attribute: true },
            height: { type: String, attribute: true },
            width: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.aspectRatio = '';
        this.height = '';
        this.width = '';
    }

    render() {
        const aspectOverride = this.aspectRatio ? `--ilw-video--aspect-ratio: ${this.aspectRatio}` : '';

        const dimensions = this.getIframeDimensions();
        this.height = this.height ? this.height : dimensions.height;
        this.width = this.width ? this.width : dimensions.width;

        return html`
            <div class="video">
                <div class="aspectRatio" style="${aspectOverride} max-height: ${this.height}; max-width: ${this.width};">
                    <slot></slot>
                </div>
            </div>
        `;
    }

    getIframeDimensions() {
        const element = this.querySelector('iframe, embed, object');
        if (element === null) {
            throw 'ilw-video component missing iframe.'
        }

        const height = element?.getAttribute('height') + 'px' ?? '100%';
        const width = element?.getAttribute('width') + 'px' ?? '100%';

        const dimensions = {
            height: height,
            width: width,
        };

        return dimensions;
    }
}

customElements.define('ilw-video', Video);