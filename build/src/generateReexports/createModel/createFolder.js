"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
function createFolder(folder) {
    const files = folder.files.map(file => createFile(file, folder));
    return {
        id: folder.path,
        canWriteIndex: folder.canWriteIndex,
        files
    };
}
exports.createFolder = createFolder;
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
//# sourceMappingURL=createFolder.js.map