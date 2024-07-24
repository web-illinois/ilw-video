# ilw-video

## Overview

Responsive video wrapper for Illinois Toolkit.
This is not the video-feature, just a way to box a youtube video or mediaspace video.

See [toolkit management issue #23](https://github.com/web-illinois/toolkit-management/issues/23).

## NPM Install

None yet. Still in alpha.

## Files

None yet. Still in alpha.

## Code Examples

Most embedded videos will use a standard 16:9 aspect ratio, as defined in `--ilw-video--aspect-ratio`.

```html
<!-- standard youtube embed -->
<ilw-video>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pW8cNXyAqyI?si=X9643WrgKwDm0BTw" title="Progress isn't Quiet at Illinois" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

```html
<!-- mediaspace embed -->
<ilw-video>
    <iframe id="kmsembed-1_s61j2nnf" width="640" height="394" src="https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_s61j2nnf/uiConfId/26883701/pbc/33485061/st/0" class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" referrerPolicy="no-referrer-when-downgrade" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="150 Years of Illinois: A Holiday Greeting from the Chancellor"></iframe>
</ilw-video>
```

YouTube Shorts use a 9:16 aspect ratio, so you will need to override the `--ilw-video--aspect-ratio` variable, either inline or in your stylesheet.

```html
<!-- youtube short -->
<ilw-video aspect-ratio="9/16;">
    <iframe width="467" height="831" src="https://www.youtube.com/embed/6kIIFYwIU5w" title="Cheers to the start of an #ILLINOIS summer ☀️ #summer #solstice #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ilw-video>
```

## Accessibility Notes and Use

YouTube video embed codes are created with boilerplate title attributes. You will need to correct each embedded video's title yourself.

## External References

n/a
