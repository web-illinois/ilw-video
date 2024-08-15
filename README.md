# ilw-video

## Overview

A responsive wrapper for embedded videos.
This component ensures a consistent size and aspect ratio across breakpoints, but does not supply the video element or its controls.

By default, the container uses the same 16:9 aspect ratio used by standard YouTube videos.

An individual video may be given a custom aspect ratio using the component's `aspectRatio` attribute.
For example, a YouTube short would use `aspectRatio="9/16"`.

If all videos on a page should use a common custom aspect ratio, the component's aspect ratio may be reset using the `--ilw-video--aspect-ratio` css variable.
For example, a page with multiple YouTube shorts might use the following style rule instead of setting each component's `aspectRatio` attribute.

```css
<style>
    :root {
        --ilw-video--aspect-ratio: 9/16;
    }
</style>
```

The video component may use the size and width attributes specified in the video's embed code.
Size may also be controlled directly using the component's `height` and `width` attributes.
If no size is specified in the component or embed code, the video will fill the component's parent container.

## Slots

The video component has only one slot, which contains the video embed code (typically an iframe).

## NPM Install

None yet. Still in alpha.

## Files

None yet. Still in alpha.

## Code Examples

Most embedded videos will use a standard 16:9 aspect ratio, as defined in `--ilw-video--aspect-ratio`.

### Standard YouTube Embed

```html
<ilw-video>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pW8cNXyAqyI?si=X9643WrgKwDm0BTw" title="Progress isn't Quiet at Illinois" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

### Mediaspace Embed

```html
<ilw-video>
    <iframe id="kmsembed-1_s61j2nnf" width="640" height="394" src="https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_s61j2nnf/uiConfId/26883701/pbc/33485061/st/0" class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" referrerPolicy="no-referrer-when-downgrade" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="150 Years of Illinois: A Holiday Greeting from the Chancellor"></iframe>
</ilw-video>
```

### YouTube Short

YouTube Shorts use a 9:16 aspect ratio, so you will need to override the `--ilw-video--aspect-ratio` variable, either inline or in your stylesheet.

```html
<ilw-video aspectRatio="9/16;">
    <iframe width="467" height="831" src="https://www.youtube.com/embed/6kIIFYwIU5w" title="Cheers to the start of an #ILLINOIS summer ☀️ #summer #solstice #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

## Accessibility Notes and Use

YouTube video embed codes are created with boilerplate title attributes. You will need to correct each embedded video's title yourself.

Videos must be captioned. Caption files must be uploaded with the video, and are not attached to the Illinois Toolkit video component.

## External References

- [Video Resolution & Aspect Ratios (YouTube)](https://support.google.com/youtube/answer/6375112)
