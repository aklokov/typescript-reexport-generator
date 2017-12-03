"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_files_helper_1 = require("ts-files-helper");
const parseFolder_1 = require("./parseFolder");
const tools_1 = require("./tools");
const defaultOptions = {
    lineFeed: '\n',
    tsconfig: {}
};
async function generateReexports(paths, options = {}) {
    options = Object.assign({}, defaultOptions, options);
    const globs = createGlobs(paths);
    const folders = await ts_files_helper_1.collectFolders(globs);
    const models = await Promise.all(folders.map(folder => parseFolder_1.parseFolder(folder, options.tsconfig)));
    const result = null;
}
exports.generateReexports = generateReexports;
function createGlobs(paths) {
    if (!Array.isArray(paths)) {
        paths = [paths];
    }
    return [...paths.map(path => tools_1.combinePath(path, '**/*.ts')), ...paths.map(path => tools_1.combinePath(path, '**/*.tsx'))];
}
//# sourceMappingURL=generateReexports.js.map