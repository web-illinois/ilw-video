import { css } from 'lit';

export default css`
    .aspectRatio {
        position: relative;
        aspect-ratio: var(--ilw-video--aspect-ratio);
    }

    .aspectRatio::before {
        display: top;
        padding-top: calc(var(--ilw-video--aspect-ratio, 0.5625) * 100%);
        content: "";
    }

    .aspectRatio > ::slotted(iframe),
    .aspectRatio > ::slotted(embed),
    .aspectRatio > ::slotted(object) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;