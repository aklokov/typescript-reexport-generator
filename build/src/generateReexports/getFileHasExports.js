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
function isTsFile(file) {
    return (file.endsWith('.ts') || file.endsWith('./tsx')) && !file.endsWith('.d.ts');
}
function getFileHasExports(file) {
    return __awaiter(this, void 0, void 0, function* () {
        if (file.isDir || !isTsFile(file.file) || file.file === 'index.ts') {
            return createHasExports(file, false);
        }
        const content = yield fse.readFile(file.fullPath, 'utf8');
        return createHasExports(file, hasMatch(content));
    });
}
exports.getFileHasExports = getFileHasExports;
const funcRegex = /export[\s]*function|export[\s]*async[\s]*function/;
const typeRegex = /export[\s]*interface|export[\s]*type/;
const constRegex = /export[\s]*const[\s]*[^\s]*[\s]*=[\s]*{/;
function hasMatch(content) {
    const hasFunc = !!funcRegex.exec(content);
    const hasType = !!typeRegex.exec(content);
    const hasConst = !!constRegex.exec(content);
    return hasFunc || hasType || hasConst;
}
function createHasExports(file, hasExports) {
    return {
        file: file.file,
        hasExports
    };
}
//# sourceMappingURL=getFileHasExports.js.map