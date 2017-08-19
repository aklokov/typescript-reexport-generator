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
function generateReexports(path) {
    return __awaiter(this, void 0, void 0, function* () {
        path = _1.normalizePath(path);
        const allFiles = yield fse.readdir(path);
        const fileIsDirs = yield Promise.all(allFiles.map(file => _1.getFileIsDir(path, file)));
        const dirs = fileIsDirs.filter(file => file.isDir);
        const dirPromises = dirs.map(dir => generateReexports(dir.fullPath));
        const filePromise = _1.generateteReexportInDir(path, fileIsDirs);
        yield Promise.all([...dirPromises, filePromise]);
    });
}
exports.generateReexports = generateReexports;
//# sourceMappingURL=generateReexports.js.map