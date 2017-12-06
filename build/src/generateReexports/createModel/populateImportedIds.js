"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_map_1 = require("hash-map");
const tools_1 = require("../tools");
function populateImportedIds(folders) {
    const foldersMap = hash_map_1.toStringMap(folders, folder => folder.id);
    const filesMap = hash_map_1.toStringMap(tools_1.flatMap(folders, folder => folder.files), file => file.id);
    return folders.map(folder => populateIdsInFolder(folder, foldersMap, filesMap));
}
exports.populateImportedIds = populateImportedIds;
function populateIdsInFolder(folder, folders, files) {
    return Object.assign({}, folder, { files: folder.files.map(file => populateIdsInFile(file, folders, files)) });
}
function populateIdsInFile(file, folders, files) {
    return Object.assign({}, file, { importedIds: tools_1.flatMap(file.references, ref => getReferencedIds(ref, file, folders, files)) });
}
const index = 'index';
function getReferencedIds(ref, file, folders, files) {
    const refFile = files[ref];
    if (refFile) {
        return [refFile.id];
    }
    const refFolder = folders[ref];
    if (refFolder) {
        if (refFolder.canWriteIndex) {
            return refFolder.files.filter(file => file.name !== index).map(file => file.id);
        }
        else {
            return refFolder.files.filter(file => file.name === index).map(file => file.id);
        }
    }
    return [];
}
//# sourceMappingURL=populateImportedIds.js.map