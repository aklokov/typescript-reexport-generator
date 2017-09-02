"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function composeFile(files, options) {
    const stripped = files.map(file => stripExtension(file));
    const lines = _.uniq(stripped).map(file => `export * from './${file}';`);
    return lines.join(options.lineFeed) + options.lineFeed;
}
exports.composeFile = composeFile;
function stripExtension(file) {
    const lastDot = file.lastIndexOf('.');
    return file.substr(0, lastDot);
}
//# sourceMappingURL=composeFile.js.map