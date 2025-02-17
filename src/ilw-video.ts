import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
// @ts-ignore
import styles from './ilw-video.styles.css?inline'
import './ilw-video.css';
import UrlItem from './utilities/urlitem';
import AttributeUtils from './utilities/attribute-utils';
import { customElement, property } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js';

@customElement('ilw-video')
class Video extends LitElement {
    @property({ attribute: true })
    aspectratio: string;

    @property({ attribute: true })
    height: string;

    @property({ attribute: true })
    src: string | undefined;

    @property({ attribute: true })
    title: string;

    @property({ attribute: true })
    view: string | undefined;

    @property({ attribute: true })
    width: string;

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.aspectratio = '';
        this.height = '';
        // this.src = '';
        this.title = '';
        // this.view = '';
        this.width = '';
    }

    private async fetchData() {
        console.debug('waiting for data');
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve("done waiting!"), 5000)
        });
        return html`
            <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/pW8cNXyAqyI?si=X9643WrgKwDm0BTw"
                    title="Progress isn't Quiet at Illinois" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          `;
    }

    render() {
        const inlineAspect = this.aspectratio ? `--ilw-video--aspect-ratio: ${AttributeUtils.convertAspectRatio(this.aspectratio)}` : '';

        let content = 'Just a placeholder.';
        if (this.src !== undefined) {
            content = 'use src attribute.'

            const slot = this.shadowRoot?.querySelector('slot');
            const dimensions = this.getIframeDimensions(null);

            this.height = this.height ? this.height : dimensions.height;
            this.width = this.width ? this.width : dimensions.width;

            const embed = this.generateIframe(this.src, this.title, this.view ?? '');
            if (slot) {
                slot.assign(embed as unknown as Element)
            }

            return html`
                <div class="video">
                    <p>${content}</p>
                    <div class="aspectratio" style="${inlineAspect} max-height: ${AttributeUtils.pixelate(this.height)}; max-width: ${AttributeUtils.pixelate(this.width)};">
                        ${slot ? html`${slot}` : html`${embed}`}
                    </div>
                </div>
            `;
        } else {
            content = 'await iframe availability'

            return html`
            <div class="video">
                <p>${content}</p>
                <div class="aspectratio" style="${inlineAspect};">
                ${until(
                this.fetchData()
                ,
                html`
                        <p>Awaiting callback</p>
                    `
            )}
                </div>
            </div>
            `;
        }

        throw new Error('this should be unreachable');
    }

    generateIframe(url: string, title: string, view: string): TemplateResult {
        console.warn(`Generating iframe for ${title}`);
        let urlHelper = new UrlItem.UrlItem(url, view);
        if (urlHelper.videoType == "youtube") {
            return html`<iframe title='${title} (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
        } else if (urlHelper.videoType == "mediaspace") {
            return html`<iframe title='${title} (video)' id='kaltura_player_${urlHelper.videoId}' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>`;
        } else if (urlHelper.videoType == "vimeo") {
            return html`<iframe title='${title} (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${urlHelper.videoUrl}' frameborder='0' allowfullscreen></iframe>`;
        } else if (urlHelper.videoType == "blank") {
            return html`<div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: black; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;'>${title}</div>`;
        } else {
            return html``;
        }
    }

    getIframeDimensions(element: Element | null) {
        const height = element?.getAttribute('height') ?? '100%';
        const width = element?.getAttribute('width') ?? '100%';

        const dimensions = {
            height: height,
            width: width,
        };

        return dimensions;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-video": Video;
    }
}