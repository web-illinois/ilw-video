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
        this.title = '';
        this.width = '';
    }

    private async resolveEmbed() {
        let embed: Element | null | TemplateResult = this.querySelector('iframe, embed, object');
        console.debug('resolving embed', { embed });

        // check whether we're using attribute or slotted rendering.
        // if both are missing, assume slotted iframe has not attached to component.
        if (this.src === undefined && embed === null) {
            console.debug('no src or iframe. awaiting component update.')
            await this.getUpdateComplete();
        }

        const slot = this.shadowRoot?.querySelector('slot');

        const dimensions = this.getIframeDimensions(embed);
        this.height = this.height ? this.height : dimensions.height;
        this.width = this.width ? this.width : dimensions.width;

        if (embed === null) {
            embed = this.generateIframe(this.src ?? '', this.title, this.view ?? '');
            if (slot) {
                slot.assign(embed as unknown as Element)
            }
        }

        console.debug('returning video', { slot }, { embed });
        return slot ? html`${slot}` : html`${embed}`
    }

    render() {
        const inlineAspect = this.aspectratio ? `--ilw-video--aspect-ratio: ${AttributeUtils.convertAspectRatio(this.aspectratio)}` : '';

        return html`
            <div class="video">
                <div class="aspectratio" style="${inlineAspect} max-height: ${AttributeUtils.pixelate(this.height)}; max-width: ${AttributeUtils.pixelate(this.width)};">
                    ${until(
            this.resolveEmbed(),
            html`
                            <!-- awaiting callback -->
                        `
        )}
                </div>
            </div>
            `;
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