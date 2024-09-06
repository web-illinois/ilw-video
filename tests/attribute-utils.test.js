import { test, expect } from '@jest/globals';
import AttributeUtils from '../utilities/attribute-utils';

test.concurrent.each([
    ['1', '1px'],
    [1, '1px'],
    ['50%', '50%'],
    ['3rem', '3rem']
])
    ('ensure pixelate renders dimension %p as %p', async (value, expected) => {
        const actual = AttributeUtils.pixelate(value);
        expect(actual).toBe(expected);
    });

test.concurrent.each([
    ['tv', '16/9'],
    ['vertical', '9/16'],
    ['16/9', '16/9'],
    ['1.7777', '1.7777'],
    ['auto', 'auto']
])('ensure aspect ratio converter sees %p as %p', async (aspect, expected) => {
    const actual = AttributeUtils.convertAspectRatio(aspect);
    expect(actual).toBe(expected);
})