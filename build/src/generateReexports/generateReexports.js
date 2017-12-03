"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_files_helper_1 = require("ts-files-helper");
const parseFolder_1 = require("./parseFolder");
const defaultOptions = {
    lineFeed: '\n'
};
async function generateReexports(globs, options = {}) {
    options = Object.assign({}, defaultOptions, options);
    const folders = await ts_files_helper_1.collectFolders(globs);
    const models = await Promise.all(folders.map(parseFolder_1.parseFolder));
}
exports.generateReexports = generateReexports;
//# sourceMappingURL=generateReexports.js.map