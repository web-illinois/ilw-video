import { CSSResultGroup, LitElement, TemplateResult, html, unsafeCSS } from 'lit';
// @ts-ignore
import styles from './ilw-video.styles.css?inline'
import './ilw-video.css';
import UrlItem from './utilities/urlitem';
import AttributeUtils from './utilities/attribute-utils';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js'

@customElement('ilw-video')
export default class Video extends LitElement {
    @queryAssignedElements()
    embed?: Array<HTMLIFrameElement>;

    @property({ attribute: true })
    aspectratio: string;

    @property({ attribute: true, reflect: true })
    height: string;

    @property({ attribute: true })
    src?: string;

    @property({ attribute: true })
    title: string;

    @property({ attribute: true })
    view?: string;

    @property({ attribute: true, reflect: true })
    width: string;

    static get styles(): CSSResultGroup {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.aspectratio = '';
        this.title = '';
        this.height = '';
        this.width = '';
    }

    render() {
        const inlineAspect = this.aspectratio ? `--ilw-video--aspect-ratio: ${AttributeUtils.convertAspectRatio(this.aspectratio)}` : '';

        if (this.src !== undefined) {
            const dimensions = this.getIframeDimensions(null);
            this.height = this.height ? this.height : dimensions.height;
            this.width = this.width ? this.width : dimensions.width;

            const embed = this.generateIframe(this.src ?? '', this.title, this.view ?? '');

            return html`
                <div class="video">
                    <div class="aspectratio" style="${inlineAspect} max-height: ${AttributeUtils.pixelate(this.height)}; max-width: ${AttributeUtils.pixelate(this.width)};">
                        <slot>${embed}</slot>
                    </div>
                </div>
                `;
        }

        return html`
            <div class="video">
                <div class="aspectratio" style="${inlineAspect} max-height: ${AttributeUtils.pixelate(this.height)}; max-width: ${AttributeUtils.pixelate(this.width)};">
                    <slot @slotchange=${this.handleSlotChange}></slot>
                </div>
            </div>
            `;
    }

    private generateIframe(url: string, title: string, view: string): TemplateResult {
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

    private getIframeDimensions(element: Element | null) {
        const height = element?.getAttribute('height') ?? '100%';
        const width = element?.getAttribute('width') ?? '100%';

        const dimensions = {
            height: height,
            width: width,
        };

        return dimensions;
    }

    private handleSlotChange(e: any) {
        if (this.embed === undefined || this.embed.length <= 0) {
            return;
        }

        const embed = this.embed[0];
        const dimensions = this.getIframeDimensions(embed);
        this.height = this.height ? this.height : dimensions.height;
        this.width = this.width ? this.width : dimensions.width;
    }
}

customElements.get('ilw-video') || customElements.define('ilw-video', Video);