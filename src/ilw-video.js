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

        return html`
            <div class="video">
                <div class="aspectRatio" style="${aspectOverride}">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('ilw-video', Video);