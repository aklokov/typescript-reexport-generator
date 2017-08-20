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
const fse = require("fs-extra");
const _1 = require(".");
const defaultOptions = {
    lineFeed: '\n'
};
function generateReexports(path, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return generateReexportsImpl(_1.normalizePath(path), Object.assign({}, defaultOptions, options));
    });
}
exports.generateReexports = generateReexports;
function generateReexportsImpl(path, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const allFiles = yield fse.readdir(path);
        const fileIsDirs = yield Promise.all(allFiles.map(file => _1.getFileIsDir(path, file)));
        const dirs = fileIsDirs.filter(file => file.isDir);
        const dirPromises = dirs.map(dir => generateReexportsImpl(dir.fullPath, options));
        const filePromise = _1.generateteReexportInDir(path, fileIsDirs, options);
        yield Promise.all([...dirPromises, filePromise]);
    });
}
//# sourceMappingURL=generateReexports.js.map