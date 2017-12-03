"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripExtension(file) {
    const dotIndex = file.lastIndexOf('.');
    return dotIndex === -1 ? file : file.substr(0, dotIndex);
}
exports.stripExtension = stripExtension;
//# sourceMappingURL=stripExtension.js.map