import { test, expect } from '@jest/globals';
import AttributeUtils from '../utilities/attribute-utils';

test.concurrent.each([
    ['1', '1px'],
    [1, '1px'],
    ['50%', '50%'],
    ['3rem', '3rem']
])
    ('ensure dimension %p renders as %p', async (value, expected) => {
        const actual = AttributeUtils.pixelate(value);
        expect(actual).toBe(expected);
    });