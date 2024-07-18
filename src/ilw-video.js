import { LitElement, html } from 'lit';
import styles from './ilw-video.styles'
import './ilw-video.css';

class Video extends LitElement {
    static get properties() {
        return {
            aspectRatio: { type: String, attribute: true },
            focus: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.aspectRatio = '';
        this.focus = false;
    }

    render() {
        return html`
            <div class="video">
                <div class="aspect-ratio">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('ilw-video', Video);