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
function generateteReexportInDir(path, files, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const canCreate = yield _1.canCreateReexport(files);
        if (!canCreate) {
            return;
        }
        const filesWithExports = yield Promise.all(files.map(_1.getFileHasExports));
        const exportFiles = filesWithExports
            .filter(file => file.hasExports)
            .map(file => stripExtension(file.file));
        if (!exportFiles.length) {
            return;
        }
        const lines = exportFiles
            .map(createReexport);
        const content = lines.join(options.lineFeed) + options.lineFeed;
        const indexPath = _1.combinePath(path, _1.constants.index);
        yield _1.gracefulWriteFile(indexPath, content);
    });
}
exports.generateteReexportInDir = generateteReexportInDir;
function stripExtension(file) {
    const lastDot = file.lastIndexOf('.');
    return file.substr(0, lastDot);
}
function createReexport(file) {
    return `export * from './${file}';`;
}
//# sourceMappingURL=generateReexportInDir.js.map