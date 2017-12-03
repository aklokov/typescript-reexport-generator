"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_files_helper_1 = require("ts-files-helper");
const parseFolder_1 = require("./parseFolder");
const defaultOptions = {
    lineFeed: '\n',
    tsconfig: {}
};
async function generateReexports(globs, options = {}) {
    options = Object.assign({}, defaultOptions, options);
    const folders = await ts_files_helper_1.collectFolders(globs);
    const models = await Promise.all(folders.map(folder => parseFolder_1.parseFolder(folder, options.tsconfig)));
}
exports.generateReexports = generateReexports;
//# sourceMappingURL=generateReexports.js.map