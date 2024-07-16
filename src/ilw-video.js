import { LitElement, html } from 'lit';
import styles from './ilw-video.styles'
import './ilw-video.css';

class Video extends LitElement {
    static get properties() {
        return {
            align: { type: String, attribute: true },
            focus: { type: String, attribute: true },
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.align = '';
        this.focus = false;
        this.theme = '';
    }

    render() {
        return html`
            <div class="video">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('ilw-video', Video);