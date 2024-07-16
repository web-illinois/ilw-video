import { css } from 'lit';

export default css`
    .aspect-ratio {
        position: relative;
        width: 100%;
        aspect-ratio: var(--ilw-video--aspect-ratio);
    }

    .aspect-ratio::before {
        display: top;
        padding-top: var(--ilw-video--aspect-ratio);
        content: "";
    }

    .aspect-ratio > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;