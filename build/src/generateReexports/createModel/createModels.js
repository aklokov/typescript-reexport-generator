"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createFolder_1 = require("./createFolder");
const populateImportedIds_1 = require("./populateImportedIds");
function createModels(folders) {
    const folderModels = folders.map(createFolder_1.createFolder);
    return populateImportedIds_1.populateImportedIds(folderModels);
}
exports.createModels = createModels;
//# sourceMappingURL=createModels.js.map