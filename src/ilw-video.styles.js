import { css } from 'lit';

export default css`
    .aspectratio {
        position: relative;
        aspect-ratio: var(--ilw-video--aspect-ratio);
    }

    .aspectratio::before {
        display: top;
        padding-top: calc(var(--ilw-video--aspect-ratio, 0.5625) * 100%);
        content: "";
    }

    .aspectratio > ::slotted(iframe),
    .aspectratio > ::slotted(embed),
    .aspectratio > ::slotted(object) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .videowrapper-width {
        width: var(--il-video-max-width);
        margin: var(--il-video-margin);
    }

    .videowrapper-full {
        width: 100%; 
        align-self: center;
    }

    .videowrapper {
        position: relative; 
        height: 0;
    }
`;