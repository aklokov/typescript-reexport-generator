"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const tools_1 = require("../../tools");
const constants_1 = require("../constants");
const _ = require("lodash");
function collectFolders(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield _1.getFilesWithIsDir(path);
        const folders = files.filter(file => file.isDir).map(file => file.file);
        const folderPromises = folders.map(folder => collectFolders(tools_1.combinePath(path, folder)));
        const folderData = _.flatten(yield Promise.all(folderPromises));
        const thisFolder = getFolder(path, files, folders);
        return thisFolder ? [thisFolder, ...folderData] : folderData;
    });
}
exports.collectFolders = collectFolders;
function getFolder(path, files, folders) {
    const allTsFiles = files.filter(file => !file.isDir).map(file => file.file).filter(file => isTsFile(file));
    if (!allTsFiles.length) {
        return null;
    }
    const withoutIndex = allTsFiles.filter(file => file !== constants_1.constants.index);
    return {
        path,
        index: allTsFiles.length > withoutIndex.length,
        tsFiles: withoutIndex,
        folders
    };
}
function isTsFile(file) {
    return file.endsWith(constants_1.constants.ts) || file.endsWith(constants_1.constants.tsx);
}
//# sourceMappingURL=collectFolders.js.map