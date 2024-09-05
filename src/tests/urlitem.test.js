import { expect, test } from '@jest/globals';
import UrlItem from '../legacy/urlitem';

test('youtube short', () => {
    const urlInformation = new UrlItem.UrlItem('https://youtube.com/shorts/rNVU0k3u14Y', '');
    expect(urlInformation.videoType).toBe('youtube');
    expect(urlInformation.videoUrl).toBe('https://www.youtube.com/embed/rNVU0k3u14Y')
})

test('youtube live', () => {
    const urlInformation = new UrlItem.UrlItem('https://youtube.com/live/coFTFEFfVa8', '');
    expect(urlInformation.videoType).toBe('youtube');
    expect(urlInformation.videoUrl).toBe('https://www.youtube.com/embed/coFTFEFfVa8')
})

test('youtube iframe with channel', () => {
    const urlInformation = new UrlItem.UrlItem('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '');
    expect(urlInformation.videoType).toBe('youtube');
    expect(urlInformation.videoUrl).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ&ab_channel=RickAstley');
})

test('youtube iframe without channel', () => {
    const urlInformation = new UrlItem.UrlItem('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '');
    expect(urlInformation.videoType).toBe('youtube');
    expect(urlInformation.videoUrl).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
})

test('youtube iframe embed', () => {
    const urlInformation = new UrlItem.UrlItem('https://youtu.be/IcrbM1l_BoI', '');
    expect(urlInformation.videoType).toBe('youtube');
    expect(urlInformation.videoUrl).toBe('https://www.youtube.com/embed/IcrbM1l_BoI');
})

test('mediaspace iframe link', () => {
    const urlInformation = new UrlItem.UrlItem('https://mediaspace.illinois.edu/media/t/1_sb1wrbxx', '');
    expect(urlInformation.videoType).toBe('mediaspace');
    expect(urlInformation.videoUrl).toBe('https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_sb1wrbxx/uiConfId/26883701');
})

test('mediaspace iframe link', () => {
    const urlInformation = new UrlItem.UrlItem('https://mediaspace.illinois.edu/media/t/1_sb1wrbxx', '');
    expect(urlInformation.videoType).toBe('mediaspace');
    expect(urlInformation.videoUrl).toBe('https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_sb1wrbxx/uiConfId/26883701');
})

test('mediaspace iframe embed', () => {
    const urlInformation = new UrlItem.UrlItem('https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_sb1wrbxx/uiConfId/26883701', '');
    expect(urlInformation.videoType).toBe('mediaspace');
    expect(urlInformation.videoUrl).toBe('https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_sb1wrbxx/uiConfId/26883701');
})

test('vimeo iframe url', () => {
    const urlInformation = new UrlItem.UrlItem('https://vimeo.com/140627135', '');
    expect(urlInformation.videoType).toBe('vimeo');
    expect(urlInformation.videoUrl).toBe('https://player.vimeo.com/video/140627135');
})

test('vimeo iframe embed', () => {
    const urlInformation = new UrlItem.UrlItem('https://player.vimeo.com/video/140627135', '');
    expect(urlInformation.videoType).toBe('vimeo');
    expect(urlInformation.videoUrl).toBe('https://player.vimeo.com/video/140627135');
})