import { LitElement, html } from 'lit';
import styles from './ilw-video.styles'
import './ilw-video.css';

class Video extends LitElement {
    static get properties() {
        return {
            align: { type: String, attribute: true },
            focus: { type: String, attribute: true },
            theme: { type: String, attribute: true },
            url: { type: String, attribute: true },
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
        this.url = '';
    }

    render() {
        return html`
            <div class="video">
                <iframe id="todo_generate_id_from_url" width="640" height="394" src="todo_pass_url" class="todo_check_embed_class" todo_generate_options frameborder="0" title="todo_generate_title" style="></iframe>
            </div>
        `;
    }
}

customElements.define('ilw-video', Video);