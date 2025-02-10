class Item { }
export default class AttributeUtils extends Item {
    static convertAspectRatio(aspect?: string) {
        switch (aspect) {
            case 'tv':
                console.warn('Legacy aspect ratio "tv" is deprecated. Converting to 16/9.');
                return '16/9';
            case 'vertical':
                console.warn('Legacy aspect ratio "vertical" is deprecated. Converting to 9/16.');
                return '9/16';
            default:
                return aspect;
        }
    }

    static pixelate(dimension: string | number) {
        const pixelated = isNaN(dimension as number) ? dimension : dimension + 'px';
        return pixelated;
    }
}