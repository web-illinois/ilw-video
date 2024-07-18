import { css } from 'lit';

export default css`
    .aspect-ratio {
        position: relative;
        width: 100%;
        aspect-ratio: var(--ilw-video--aspect-ratio);
    }

    .aspect-ratio::before {
        display: top;
        padding-top: calc(var(--ilw-video--aspect-ratio, 0.5625) * 100%);
        content: "";
    }

    .aspect-ratio > ::slotted(iframe),
    .aspect-ratio > ::slotted(embed),
    .aspect-ratio > ::slotted(object) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;