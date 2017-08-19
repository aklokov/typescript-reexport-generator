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
function canCreateReexport(files) {
    return __awaiter(this, void 0, void 0, function* () {
        const index = files.find(file => !file.isDir && file.file === _1.constants.index);
        if (!index) {
            return true;
        }
        const content = yield fse.readFile(index.fullPath, 'utf8');
        const lines = content.split(/\r?\n|;/).filter(line => line.length);
        const onlyReexports = !lines.find(line => !reexportsOnly(line));
        return onlyReexports;
    });
}
exports.canCreateReexport = canCreateReexport;
const reexportRegex = /(export \* from '[^\']*')/;
function reexportsOnly(line) {
    const match = reexportRegex.exec(line);
    return !!match && (match[1].trim() === line.trim());
}
//# sourceMappingURL=canCreateReexport.js.map