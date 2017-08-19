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
const fse = require("fs-extra");
function getFilesWithStatues(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield fse.readdir(path);
        const results = yield Promise.all(files.map(file => getFileIsDir(path, file)));
        return results;
    });
}
exports.getFilesWithStatues = getFilesWithStatues;
function getFileIsDir(path, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullPath = _1.combinePath(path, file);
        const isDir = yield _1.isDirectory(fullPath);
        return {
            file,
            fullPath,
            isDir
        };
    });
}
exports.getFileIsDir = getFileIsDir;
//# sourceMappingURL=getFileIsDir.js.map