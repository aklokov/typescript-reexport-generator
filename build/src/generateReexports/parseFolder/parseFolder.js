"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createEmptyFolder_1 = require("./createEmptyFolder");
const parseFile_1 = require("./parseFile");
async function parseFolder(folder, tsConfig) {
    const [emptyFolder, files] = await Promise.all([createEmptyFolder_1.createEmptyFolder(folder), parseFiles(folder, tsConfig)]);
    return Object.assign({}, emptyFolder, { files });
}
exports.parseFolder = parseFolder;
async function parseFiles(folder, tsConfig) {
    return Promise.all(folder.files.map(file => parseFile_1.parseFile(folder.path, file, tsConfig)));
}
//# sourceMappingURL=parseFolder.js.map