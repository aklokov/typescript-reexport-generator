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
const tools_1 = require("../tools");
function canModifyIndex(folder) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!folder.index) {
            return true;
        }
        const indexContent = yield fse.readFile(_1.indexPath(folder), 'utf8');
        return _1.canOverwriteIndex(indexContent, folder.folders);
    });
}
exports.canModifyIndex = canModifyIndex;
function writeReexports(folder, files, options) {
    return __awaiter(this, void 0, void 0, function* () {
        yield tools_1.gracefulWriteFile(_1.indexPath(folder), _1.composeFile(files, options));
    });
}
exports.writeReexports = writeReexports;
function deleteIndex(folder) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = _1.indexPath(folder);
        console.log('unlink ' + file);
        yield fse.unlink(file);
    });
}
exports.deleteIndex = deleteIndex;
//# sourceMappingURL=processFolderImpl.js.map