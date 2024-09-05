/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
    moduleFileExtensions: ['js'],
    testEnvironment: "node",
    testRegex: '/tests/.*\\.(test|spec)?\\.js$',
    transform: {},
};