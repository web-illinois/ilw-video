# ilw-video

## Overview

A responsive wrapper for embedded videos.
This component ensures a consistent size and aspect ratio across breakpoints, but does not supply the video element or its controls.

By default, the container uses the same 16:9 aspect ratio used by standard YouTube videos.

An individual video may be given a custom aspect ratio using the component's `aspectratio` attribute.
For example, a YouTube short would use `aspectratio="9/16"`.

If all videos on a page should use a common custom aspect ratio, the component's aspect ratio may be reset using the `--ilw-video--aspect-ratio` css variable.
For example, a page with multiple YouTube shorts might use the following style rule instead of setting each component's `aspectratio` attribute.

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

For convenience and backward compatibility, embed codes may be generated automatically for YouTube, Mediaspace, and Vimeo URLs by using the `src` attribute. If the `src` attribute is used, a corresponding `title` attribute must be included. Auto-generated videos will use the default 16:9 aspect ratio and will fill their parent container. If both an embed code and src attribute are used, the slotted embed code will take priority.

## Slots

The video component has only one slot, which contains the video embed code (typically an iframe).

## Attributes

- `aspectratio`
- `height`
- `src`
- `title`
- `width`

## Variables

- `--ilw-video--aspect-ratio`

## NPM Install

None yet. Still in alpha.

## Files

None yet. Still in alpha.

## Code Examples

Most embedded videos will use a standard 16:9 aspect ratio, as defined in `--ilw-video--aspect-ratio`.

### Standard YouTube or Mediaspace Embed

```html
<ilw-video>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pW8cNXyAqyI?si=X9643WrgKwDm0BTw" title="Progress isn't Quiet at Illinois" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

### YouTube Short

YouTube Shorts use a 9:16 aspect ratio, so you will need to override the `--ilw-video--aspect-ratio` variable, either inline or in your stylesheet.

```html
<ilw-video aspectratio="9/16;">
    <iframe width="467" height="831" src="https://www.youtube.com/embed/6kIIFYwIU5w" title="Cheers to the start of an #ILLINOIS summer ☀️ #summer #solstice #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

## Accessibility Notes and Use

YouTube video embed codes are created with boilerplate title attributes. You will need to correct each embedded video's title yourself.

Videos must be captioned. Caption files must be uploaded with the video, and are not attached to the Illinois Toolkit video component.

## Upgrade Process

`ilw-video` replaces `il-video` from Toolkit version 2 and earlier. To upgrade:

- Replace all instances of the `il-video` tag with `ilw-video`.
- Replace all instances of the `--il-video-aspect-ratio` CSS variable with `--ilw-video--aspect-ratio`.
- Replace all instances of `tv` aspect ratio with `16/9`.
- Replace all instances of `vertical` aspect ratio with `9/16`.

## External References

- [Video Resolution & Aspect Ratios (YouTube)](https://support.google.com/youtube/answer/6375112)
