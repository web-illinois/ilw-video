class Item { }
export default class AttributeUtils extends Item {
    static pixelate(dimension) {
        const pixelated = isNaN(dimension) ? dimension : dimension + 'px';
        return pixelated;
    }
}