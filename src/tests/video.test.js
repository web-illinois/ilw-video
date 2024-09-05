import { test, expect } from '@jest/globals';
import Video from '../ilw-video';

test.concurrent.each([
    ['1', '2']
])
    ('ensure dimension %s renders as %s', async (value, expected) => {
        const actual = new Video.pixelate(value);
        expect(value).toBe(expected);
    });