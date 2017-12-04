"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatMap(array, selector) {
    let result = [];
    if (array) {
        array.forEach(item => result = [...result, ...selector(item)]);
    }
    return result;
}
exports.flatMap = flatMap;
//# sourceMappingURL=flatMap.js.map