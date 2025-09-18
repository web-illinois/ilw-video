import { test, expect } from '@playwright/test';
import AttributeUtils from '../src/utilities/attribute-utils';

test.describe('pixelate assigns pixel values to unitless dimensions', () => {
    [
        { value: '1', expected: '1px' },
        { value: 7, expected: '7px' },
        { value: '50%', expected: '50%' },
        { value: '3rem', expected: '3rem' },
    ].forEach(({ value, expected }) => {
        test(`${value} becomes ${expected}`, async () => {
            const actual = AttributeUtils.pixelate(value);
            expect(actual).toBe(expected);
        });
    });

});

test.describe('aspect ratio converter handles legacy values', () => {
    [
        { aspect: 'tv', expected: '16/9' },
        { aspect: 'vertical', expected: '9/16' },
        { aspect: '16/9', expected: '16/9' },
        { aspect: '1.7777', expected: '1.7777' },
        { aspect: 'auto', expected: 'auto' },
    ].forEach(({ aspect, expected }) => {
        test(`${aspect} becomes ${expected}`, async () => {
            const actual = AttributeUtils.convertAspectRatio(aspect);
            expect(actual).toBe(expected);
        });
    });
});