"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const populateImportedIds_1 = require("./populateImportedIds");
function createEmptyFolderModels(folders) {
    return folders.map(folder => ({ id: folder.path, canWriteIndex: folder.canWriteIndex, files: null }));
}
exports.createEmptyFolderModels = createEmptyFolderModels;
function createFiles(folders) {
    let files = [];
    folders.forEach(folder => {
        const models = folder.files.map(file => createFile(file, folder));
        files = [...files, ...models];
    });
    return populateImportedIds_1.populateImportedIds(files);
}
exports.createFiles = createFiles;
function createFile(file, folder) {
    const name = tools_1.stripExtension(file.name);
    return {
        id: tools_1.combinePath(folder.path, name),
        folder: folder.path,
        name,
        hasExports: file.hasExports,
        references: file.references,
        importedIds: null
    };
}
//# sourceMappingURL=createFiles.js.map