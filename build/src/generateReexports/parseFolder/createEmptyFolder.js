"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../tools");
const canOverwriteIndex_1 = require("./canOverwriteIndex");
const indexFile = 'index.ts';
async function createEmptyFolder(folder) {
    const hasIndex = tools_1.contains(folder.files, indexFile);
    if (hasIndex) {
        return {
            path: folder.path,
            canWriteIndex: true,
            files: null
        };
    }
    const path = tools_1.combinePath(folder.path, indexFile);
    const indexContent = await tools_1.readFile(path);
    const files = folder.files.map(tools_1.stripExtension);
    return {
        path: folder.path,
        canWriteIndex: canOverwriteIndex_1.canOverwriteIndex(indexContent, files),
        files: null
    };
}
exports.createEmptyFolder = createEmptyFolder;
//# sourceMappingURL=createEmptyFolder.js.map